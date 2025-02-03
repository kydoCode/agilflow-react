import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Users } from 'lucide-react';
import { useStore } from '../store';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';


export default function Register() {
  const Navigate = useNavigate

  useEffect(() => {
    document.title = document.title.replace('%REACT_APP_PAGE_TITLE%', 'Register');
  }, []);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { register: registerUser } = useStore();

  const onSubmit = async (data) => {
    setError('');
    setSuccess('');

    try {
      await registerUser(data.name, data.email, data.password, data.role);
      setSuccess('Inscription réussie ! Vous allez être redirigé...');
      setTimeout(() => {
        Navigate('/dashboard');
      }, 3000);
    } catch (err) {
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
      console.error(err);
    }
  };

  return (
    <>
    <Header classToPass={"bg-gradient-to-br from-[#020B2D] via-[#123363] to-[#0D8B7D]"} />
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Inscription</h1>
        {error && (
          <p className='text-red-500'>{error}</p>
        )}
        {success && (
          <p className='text-green-500'>{success}</p>
        )}
        <form id="createUserForm" onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nom
            </label>
            <div className="relative">
            <input
              {...register("name", { required: "Ce champ est obligatoire" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
              type="text"
              placeholder="Nom complet"
            />
            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
            <User className="absolute left-3 top-2 text-gray-400" size={20} />
          </div>
          </div>
          <div className="relative mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
            <input
              {...register("email", { required: "L'email est obligatoire", pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
            <Mail className="absolute left-3 top-2 text-gray-400" size={20} />
          </div>
          </div>
          <div className="relative mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <div className="relative">
            <input
              {...register("password", { required: "Le mot de passe est obligatoire", minLength: { value: 8, message: "Le mot de passe doit contenir au moins 8 caractères" } })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
              type="password"
              placeholder="******************"
            />
            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
            <Lock className="absolute left-3 top-2 text-gray-400" size={20} />
          </div>
          </div>
          <div className="relative mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <div className="relative">
              <select
                {...register("role", { required: "Le role est obligatoire" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
                id="role"
                required
              >
                <option value="developer">Developer</option>
                <option value="tester">Tester</option>
                <option value="product owner">Product Owner</option>
                <option value="scrum master">Scrum Master</option>
                <option value="team member">Team Member</option>
              </select>
              <Users className="absolute left-3 top-2 text-gray-400" size={20} />
              {errors.role && <p className='text-red-500'>{errors.role?.message}</p>}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              S'inscrire
            </button>
            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >Log in</Link>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}
