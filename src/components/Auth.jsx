import React, { useState } from 'react';
import { UserCircle2, Lock, Mail } from 'lucide-react';
import { useStore } from '../store'; // Assurez-vous que le store est correctement configuré
import toast from 'react-hot-toast';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState(''); // Pour l'inscription
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLogin) {
      const success = await login(email, password);
      if (!success) {
        toast.error('Identifiants invalides');
      }
    } else {
      if (!name) {
        toast.error('Veuillez entrer votre nom');
        return;
      }
      await register(name, email, password);
      toast.success('Inscription réussie!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <UserCircle2 className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            {isLogin ? 'Bienvenue' : 'Créer un compte'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Connectez-vous pour gérer vos histoires' : 'Commencez à gérer vos histoires utilisateur'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Nom</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Entrez votre nom"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block">Email</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Entrez votre email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block">Mot de passe</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-colors"
          >
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            {isLogin ? "Vous n'avez pas de compte ? Inscrivez-vous" : 'Vous avez déjà un compte ? Connectez-vous'}
          </button>
        </div>
      </div>
    </div>
  );
}
