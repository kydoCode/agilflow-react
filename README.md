# Agilflow React Frontend

Ce document fournit une vue d'ensemble de l'application frontend Agilflow React.

## 1. Configuration du projet et dépendances

Le projet est construit en utilisant :

*   **React :** Pour construire l'interface utilisateur.
*   **Zustand :** Pour la gestion de l'état.
*   **Tailwind CSS :** Pour le style.
*   `react-hot-toast` : Pour afficher les notifications.

Ces dépendances sont gérées avec `package.json` et installées en utilisant `npm install`. Tailwind CSS est configuré dans `tailwind.config.js` et `postcss.config.js`.

## 2. Point d'entrée (`main.jsx`)

L'application démarre à `main.jsx`, qui rend le composant principal `<App />` en utilisant `react-dom/client`.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## 3. Composant principal de l'application (`App.jsx`)

Le composant `App.jsx` agit comme le conteneur principal de l'application. Il utilise le hook `useStore` de Zustand pour vérifier le statut d'authentification de l'utilisateur et rend soit le `Dashboard` pour les utilisateurs authentifiés, soit le composant `Auth` pour la connexion/l'inscription.

```jsx
import React from 'react';
import { useStore } from './store';
import { Auth } from './components/Auth';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/dashboard';
import './index.css';

function App() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <>
      <Toaster position="top-right" />
      {isAuthenticated ? <Dashboard /> : <Auth />}
    </>
  );
}

export default App;
```

## 4. Authentification (`components/Auth.jsx`)

Le composant `Auth` gère l'authentification de l'utilisateur, y compris les fonctionnalités de connexion et d'inscription.

## 5. Tableau de bord (`pages/dashboard.jsx`)

Le composant `Dashboard` est l'interface principale de l'application pour les utilisateurs authentifiés, donnant accès aux fonctionnalités de l'application.

## 6. Gestion de l'état global (`store.js`)

Zustand est utilisé dans `store.js` pour la gestion de l'état global, incluant :

*   `stories` : Gère les données des user stories.
*   `user` : Stocke les informations de l'utilisateur courant.
*   `isAuthenticated` : Suit le statut d'authentification de l'utilisateur.

Il fournit des fonctions pour l'authentification de l'utilisateur et la gestion des user stories.

```javascript
import { create } from 'zustand';

export const useStore = create(
  (set) => ({
    stories: [/* ...story data ... */],
    user: null,
    isAuthenticated: true,
    login: (email, password) => { /* ...login logic ... */ },
    logout: () => { /* ...logout logic ... */ },
    register: (email, password) => { /* ...register logic ... */ },
    addStory: (story) => { /* ...add story logic ... */ },
    updateStory: (id, updatedStory) => { /* ...update story logic ... */ },
    deleteStory: (id) => { /* ...delete story logic ... */ },
    moveStory: (id, status) => { /* ...move story logic ... */ },
  })
);
```

## 7. Style (`index.css`)

`index.css` importe les directives Tailwind CSS pour styliser l'application.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Arborescence du projet

```
agilflow-react/
├── .gitignore
├── cypress.config.js
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── vite.config.js
├── cypress/
│   ├── e2e/
│   │   ├── create_us.cy.js
│   │   ├── open_app.cy.js
│   │   └── test_auth.cy.js
│   ├── fixtures/
│   │   └── example.json
│   ├── screenshots/
│   │   └── create_us.cy.js/
│   │       ├── User Story CRUD Operations -- should create a new user story (failed).png
│   │       ├── User Story CRUD Operations -- should delete the created user story (failed).png
│   │       ├── User Story CRUD Operations -- should read the created user story (failed).png
│   │       └── User Story CRUD Operations -- should update the created user story (failed).png
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── src/
│   ├── ApiService.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── store.js
│   ├── assets/
│   │   └── images/
│   │       ├── AF_Tab.png
│   │       ├── agilflow_logo_nobg.png
│   │       ├── desktop_screen.png
│   │       ├── screencast_03.png
│   │       └── tab_nobg.png
│   ├── components/
│   │   ├── Auth.jsx
│   │   └── ui/
│   │       ├── Card.jsx
│   │       ├── Footer.jsx
│   │       ├── Header.jsx
│   │       └── Modal.jsx
│   └── pages/
│       ├── dashboard.jsx
│       ├── demoScreen.jsx
│       ├── landingPage.jsx
│       ├── legal.jsx
│       ├── login.jsx
│       ├── privacyPolicy.jsx
│       └── register.jsx
└── README.md
```

## Structure du projet

## Conclusion

Ce frontend React fournit l'authentification utilisateur et un tableau de bord pour la gestion des user stories, en utilisant Zustand pour la gestion de l'état et Tailwind CSS pour le style.
Ce fichier README.md a été mis à jour pour refléter l'état actuel du projet et son arborescence.

v2025-02-01