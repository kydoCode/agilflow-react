 const BASE_URL = 'https://agilflow-api.vercel.app';

//const BASE_URL = 'http://127.0.0.1:3000';
/*const BASE_URL = process.env.VERCEL_URL? 
`https://${process.env.VERCEL_URL}` 
: 'https://agilflow-api.vercel.app';*/

//console.log('BASE_URL is currently:', BASE_URL);



// const isProduction = process.env.NODE_ENV === 'production';

// const BASE_URL = isProduction
//   ? 'https://agilflow-api.vercel.app/api/userstories'
//   : 'http://127.0.0.1:3000/api/userstories';

// const BASE_URL_TWO = isProduction
//   ? 'https://agilflow-api.vercel.app/api/auth'
//   : 'http://127.0.0.1:3000/api/auth';

// const BASE_URL = 'http://127.0.0.1:3000/api/userstories';
// const BASE_URL_TWO = 'http://127.0.0.1:3000/api/auth';

// Config avec vercel backend
// const BASE_URL = 'https://agilflow-api.vercel.app/api/userstories';
// const BASE_URL_TWO = 'https://agilflow-api.vercel.app/api/auth';

// const isProduction = process.env.NODE_ENV === 'production';
// const BASE_URL = isProduction
//   ? 'https://agilflow-api.vercel.app/api/userstories'
//   : 'http://127.0.0.1:3000/api/userstories';
// const BASE_URL_TWO = isProduction
//   ? 'https://agilflow-api.vercel.app/api/auth'
//   : 'http://127.0.0.1:3000/api/auth';


export const apiService = {
    async login(email, password) {
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        if (!response.ok) {
            const message = await response.json();
            throw new Error(message.message || `HTTP error! status: ${response.status}`);
        }
        return response.json();
    },
    async register(name, email, password, role) {
        const response = await fetch(`${BASE_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                role
            }),
        });
        return response.json();
    },
    async getProfile(token) {
        const response = await fetch(`${BASE_URL}/api/auth/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            const message = await response.json();
            throw new Error(message.message || `HTTP error! status: ${response.status}`);
        }
        return response.json();
    },

    async getStories() {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found. Please log in.'); // Handle missing token
        }
        const response = await fetch(`${BASE_URL}/api/userstories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include token here
            },
        });
        if (!response.ok) {
            const message = await response.json();
            throw new Error(message.message || `HTTP error! status: ${response.status}`);
        }
        return response.json();
    },
    
    async getStoryById(id) {
        const response = await fetch(`${BASE_URL}/api/userstories/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    },

    async updateStory(id, story) {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASE_URL}/api/userstories/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(story),
        });
        return response.json();
    },

    async deleteStory(id) {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASE_URL}/api/userstories/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        return response.json();
    },

    async addStory(story) {
        const token = localStorage.getItem('token');
        console.log("Request Headers:", {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        console.log("Request Body:", JSON.stringify(story));
        const response = await fetch(`${BASE_URL}/api/userstories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(story),
        });
        if (!response.ok) {
            const error = await response.json(); // Capture the error response
            console.error("Full error response:", error); // Log the full error response
            throw new Error(error.message || `HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
}

// Utilisation (Par exemple sur login.jsx)
// On importe le service
// import { apiService } from "../ApiService";

// On appelle le service 
//                     // email et password récupéré depuis la page login.jsx
// const datas = await apiService.login(email, password);

// Récupérer le profil
// const profile = await apiService.getProfile(datas.token)
