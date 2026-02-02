import { create } from 'zustand';
import { apiService } from './ApiService';

export const useStore = create(
  (set, get) => ({
    stories: [],
    user: null,
    isAuthenticated: false,
    
    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
    setToken: (token) => set({ token: token }),

    initializeAuth: () => {
      const token = localStorage.getItem('token');
      if (token) {
        apiService.getProfile(token)
          .then(profile => {
            set({ isAuthenticated: true, user: profile });
          })
          .catch(error => {
            console.error('initializeAuth - error fetching profile:', error);
            localStorage.removeItem('token');
            set({ isAuthenticated: false, user: null });
          });
      }
    },

    login: async (email, password) => {
      const response = await apiService.login(email, password);
      console.log('Login response:', response);
      console.log('Token:', response.data?.token);
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        set({ user: response.data.user, isAuthenticated: true });
        console.log('Token stored:', localStorage.getItem('token'));
        return true;
      }
      console.error('No token in response');
      return false;
    },

    logout: () => {
      set({ isAuthenticated: false, user: null }); // Update isAuthenticated and clear user
      localStorage.removeItem('token');
    },

    register: async (name, email, password, role) => {
      const response = await apiService.register(name, email, password, role);
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        set({ user: response.data.user, isAuthenticated: true });
      }
    },

    addStory: async (story) => {
      const response = await apiService.addStory(story);
      const newStory = response.data || response;
      set((state) => ({
        stories: [
          ...state.stories,
          {
            ...newStory,
            createdAt: new Date(newStory.createdAt),
            updatedAt: new Date(newStory.updatedAt),
          },
        ],
      }));
    },

    updateStory: async (id, updatedStory) => {
      try {
        const response = await apiService.updateStory(id, updatedStory);
        const updatedData = response.data || response;
        set((state) => ({
          stories: state.stories.map((story) =>
            story.id === id ? { ...story, ...updatedData, updatedAt: new Date() } : story
          ),
        }));
      } catch (error) {
        console.error('Update story error:', error);
        throw error;
      }
    },

    deleteStory: async (id) => {
      await apiService.deleteStory(id);
      set((state) => ({
        stories: state.stories.filter((story) => story.id !== id),
      }));
    },

    moveStory: (id, status) =>
      set((state) => ({
        stories: state.stories.map((story) =>
          story.id === id ? { ...story, status, updatedAt: new Date() } : story
        ),
      })),

    fetchStories: async () => {
      try {
        const fetchedStories = await apiService.getStories();
        set({ stories: fetchedStories });
      } catch (error) {
        console.error("Fetch stories error:", error);
      }
    },
  })
);
