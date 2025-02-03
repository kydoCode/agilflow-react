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
      if(token && token.length > 0){
        set({ isAuthenticated: true});
      }
    },

    login: async (email, password) => {
      const response = await apiService.login(email, password);
      if (response.token) {
        localStorage.setItem('token', response.token); // Store token first
        try {
          const profile = await apiService.getProfile(response.token);
          set({ user: profile, isAuthenticated: true });
          return true;
        } catch (error) {
          console.error("Get profile error:", error);
          return false;
        }
      }
      return false;
    },

    logout: () => {
      set({ isAuthenticated: false, user: null }); // Update isAuthenticated and clear user
      localStorage.removeItem('token');
    },

    register: async (name, email, password, role) => {
      const response = await apiService.register(name, email, password, role);
      if (response.token) {
        set({ user: response.user, isAuthenticated: true });
        localStorage.setItem('token', response.token);
      }
    },

    addStory: async (story) => {
      const response = await apiService.addStory(story);
      set((state) => ({
        stories: [
          ...state.stories,
          {
            ...response,
            createdAt: new Date(response.createdAt),
            updatedAt: new Date(response.updatedAt),
          },
        ],
      }));
    },

    updateStory: async (id, updatedStory) => {
      const response = await apiService.updateStory(id, updatedStory);
      // On récupère la réponse 
      console.log('Répose update:', response);
      set((state) => ({
        stories: state.stories.map((story) =>
          story.id === id ? { ...story, ...response, updatedAt: new Date(response.updatedAt) } : story
        ),
      }));
      console.log('Stories after update:', get().stories);
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
