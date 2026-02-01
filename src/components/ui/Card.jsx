import { useState } from 'react';
import { FiFlag } from 'react-icons/fi'; // replaced by Flag from lucid-react
import { Flag, Eye } from "lucide-react";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import Modal from './Modal';
import { useStore } from '../../store';
import toast from 'react-hot-toast';

export default function Card({ id, role, action, need, status, priority }) {
    const { deleteStory, updateStory } = useStore();

    const [editModal, setEditModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [modalId, setModalId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleViewClick = () => {
        setViewModal(true);
    };

    const handleEditClick = () => {
        setEditModal(true);
        setModalId(id);
        setIsModalOpen(true);
        setIsEditing(true);
    };

    const handleDeleteClick = () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette story ?')) {
            deleteStory(id);
            toast.success('Story supprimée avec succès');
        }
    };

    const handleSaveEdit = (editedStory) => {
        updateStory(id, editedStory);
        setIsModalOpen(false);
        setIsEditing(false);
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'red';
            case 'medium':
                return 'yellow';
            case 'low':
                return 'green';
            default:
                return 'gray'; // Default color if priority is not defined
        }
    };

    const priorityColor = getPriorityColor(priority);


    return (
        <article className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 relative">
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex space-x-2 z-10">
                <button aria-label="View" className="text-gray-500 hover:text-green-500 bg-white/90 rounded p-1 shadow-sm">
                    <Eye onClick={handleViewClick} size={20} />
                </button>
                <button aria-label="Edit" className="text-gray-500 hover:text-blue-500 bg-white/90 rounded p-1 shadow-sm">
                    <MdEdit onClick={handleEditClick} size={20} />
                </button>
                <button aria-label="Delete" className="text-gray-500 hover:text-red-500 bg-white/90 rounded p-1 shadow-sm">
                    <MdDelete onClick={handleDeleteClick} size={20} />
                </button>
            </div>

             <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10">
                    <Flag size={20} color={priorityColor}/>
                </div>


            <Modal
                modalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                editingStory={{ id, role, action, need, status, priority }}
                onSave={handleSaveEdit}
                isEditing={isEditing}
            />

            {viewModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4" onClick={() => setViewModal(false)}>
                    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
                            <h2 className="text-xl font-bold">User Story #{id}</h2>
                            <button onClick={() => setViewModal(false)} className="text-gray-500 hover:text-gray-700 flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <span className="font-semibold text-blue-700">En tant que</span>
                                <p className="mt-2 text-gray-900">{role}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <span className="font-semibold text-green-700">Je veux</span>
                                <p className="mt-2 text-gray-900 whitespace-pre-wrap break-words">{action}</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <span className="font-semibold text-purple-700">Afin de</span>
                                <p className="mt-2 text-gray-900 whitespace-pre-wrap break-words">{need}</p>
                            </div>
                            <div className="flex gap-4 pt-2">
                                <div className="bg-gray-50 p-3 rounded-lg flex-1">
                                    <span className="font-semibold text-gray-700 text-sm">Status</span>
                                    <p className="mt-1 text-gray-900 capitalize">{status}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg flex-1">
                                    <span className="font-semibold text-gray-700 text-sm">Priorité</span>
                                    <p className="mt-1 text-gray-900 capitalize flex items-center gap-2">
                                        <Flag size={16} color={priorityColor} fill={priorityColor} />
                                        {priority}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-200 flex justify-end flex-shrink-0">
                            <button
                                onClick={() => setViewModal(false)}
                                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-3 sm:space-y-4 pr-8">
                <div className="flex items-start space-x-2">
                    <span className="px-2 py-1 sm:px-3 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0">
                        En tant que {role}
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
                    <span className="px-2 py-1 sm:px-3 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0">
                        je veux
                    </span>
                    <p className="text-sm sm:text-base text-gray-800 font-medium break-words overflow-wrap-anywhere w-full line-clamp-2">
                        {action}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
                    <span className="px-2 py-1 sm:px-3 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0">
                        pour/afin de
                    </span>
                    <p className="text-sm sm:text-base text-gray-800 font-medium break-words overflow-wrap-anywhere w-full line-clamp-2">
                        {need}
                    </p>
                </div>
            </div>

            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            Story #{id}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}
