import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useStore } from '../store';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';

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

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  const logout = () => {
    localStorage.removeItem('token');
    Navigate('/login');
  }


  return (
    <>
    <Header classToPass={"bg-gradient-to-br from-[#020B2D] via-[#123363] to-[#0D8B7D]"} />
    <div className="container mx-auto p-4">
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
        <div className="flex items-center">
          {/* User Profile Circle */}
          <div className="rounded-full h-8 w-8 bg-gray-300 flex items-center justify-center mr-4">
            {useStore.getState().user?.firstName ? useStore.getState().user.firstName.charAt(0).toUpperCase() : '?'}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-2" size={16} />
            Add Task
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className='text-xl font-semibold mb-2'>Todo</h2>
            <div className='space-y-2'>
               {stories
               .filter(story => story.status === 'todo')
               .map(story => (
                  <Card key={story.id} id={story.id} action={story.action} need={story.need} priority={story.priority} role={story.role} status={story.status} />
               ))}
            </div>
         </div>

         <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className='text-xl font-semibold mb-2'>Doing</h2>
            <div className='space-y-2'>
               {stories
               .filter(story => story.status === 'doing')
               .map(story => (
                  <Card key={story.id} id={story.id} action={story.action} need={story.need} priority={story.priority} role={story.role} status={story.status} />
               ))}
            </div>
         </div>

         <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className='text-xl font-semibold mb-2'>Done</h2>
            <div className='space-y-2'>
               {stories
               .filter(story => story.status === 'done')
               .map(story => (
                  <Card key={story.id} id={story.id} action={story.action} need={story.need} priority={story.priority} role={story.role} status={story.status} />
               ))}
            </div>
         </div>
      </div>
          <Modal modalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
    </>
  );
}
