import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useStore } from '../store';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import toast, { Toaster } from 'react-hot-toast';

export default function Dashboard() {
  const Navigate = useNavigate();

  useEffect(() => {
    // get token from localStorage
    const token = localStorage.getItem('token');
    if(!token){
      Navigate('/login');
    }
  }, []);

  useEffect(() => {
    document.title = 'AgilFlow - Kanban Dashboard'
  }, []);

  const { stories, fetchStories} = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hasFetched) {
      setLoading(true);
      fetchStories()
        .then(() => {
          setLoading(false);
          setHasFetched(true);
        })
        .catch(() => {
          setLoading(false);
          toast.error('Erreur lors du chargement des stories');
        });
    }
  }, []);


  return (
    <>
    <Toaster position="top-right" />
    <Header classToPass={"bg-gradient-to-br from-[#020B2D] via-[#123363] to-[#0D8B7D]"} />
    <div className="container mx-auto p-4">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
        <div className="flex items-center gap-2">
          <div className="rounded-full h-8 w-8 bg-gray-300 flex items-center justify-center">
            {useStore.getState().user?.firstName ? useStore.getState().user.firstName.charAt(0).toUpperCase() : '?'}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center text-sm sm:text-base"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-2" size={16} />
            Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
         <div className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
            <h2 className='text-xl font-semibold mb-2'>Todo</h2>
            <div className='space-y-2'>
               {loading ? (
                 <div className="animate-pulse space-y-2">
                   <div className="h-20 bg-gray-300 rounded"></div>
                   <div className="h-20 bg-gray-300 rounded"></div>
                 </div>
               ) : (
                 stories
                 .filter(story => story.status === 'todo')
                 .map(story => (
                    <Card key={story.id} id={story.id} action={story.action} need={story.need} priority={story.priority} role={story.role} status={story.status} />
                 ))
               )}
            </div>
         </div>

         <div className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
            <h2 className='text-xl font-semibold mb-2'>Doing</h2>
            <div className='space-y-2'>
               {loading ? (
                 <div className="animate-pulse space-y-2">
                   <div className="h-20 bg-gray-300 rounded"></div>
                   <div className="h-20 bg-gray-300 rounded"></div>
                 </div>
               ) : (
                 stories
                 .filter(story => story.status === 'doing')
                 .map(story => (
                    <Card key={story.id} id={story.id} action={story.action} need={story.need} priority={story.priority} role={story.role} status={story.status} />
                 ))
               )}
            </div>
         </div>

         <div className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
            <h2 className='text-xl font-semibold mb-2'>Done</h2>
            <div className='space-y-2'>
               {loading ? (
                 <div className="animate-pulse space-y-2">
                   <div className="h-20 bg-gray-300 rounded"></div>
                   <div className="h-20 bg-gray-300 rounded"></div>
                 </div>
               ) : (
                 stories
                 .filter(story => story.status === 'done')
                 .map(story => (
                    <Card key={story.id} id={story.id} action={story.action} need={story.need} priority={story.priority} role={story.role} status={story.status} />
                 ))
               )}
            </div>
         </div>
      </div>
          <Modal modalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
    </>
  );
}
