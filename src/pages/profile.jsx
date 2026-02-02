import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../ApiService';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { User, Mail, Shield, Calendar, Lock } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useStore();
  const navigate = useNavigate();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const initial = user?.name?.charAt(0).toUpperCase() || 'U';
  const createdDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString('fr-FR') : 'N/A';

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      await apiService.changePassword(oldPassword, newPassword);
      setSuccess('Mot de passe modifié avec succès');
      toast.success('Mot de passe modifié avec succès');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setShowPasswordForm(false);
        setSuccess('');
      }, 2000);
    } catch (err) {
      const errorMsg = err.message || 'Erreur lors du changement de mot de passe';
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
              {initial}
            </div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {user.role}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Shield className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Rôle</p>
                <p className="text-gray-800 capitalize">{user.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Membre depuis</p>
                <p className="text-gray-800">{createdDate}</p>
              </div>
            </div>
          </div>

          {!showPasswordForm ? (
            <div className="mt-8 space-y-3">
              <button
                onClick={() => setShowPasswordForm(true)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Modifier le mot de passe
              </button>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Retour au Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Déconnexion
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleChangePassword} className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Modifier le mot de passe</h3>
              
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                  {success}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ancien mot de passe
                </label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  autoComplete="current-password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  minLength={6}
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  minLength={6}
                  autoComplete="new-password"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordForm(false);
                    setError('');
                    setSuccess('');
                    setOldPassword('');
                    setNewPassword('');
                    setConfirmPassword('');
                  }}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
