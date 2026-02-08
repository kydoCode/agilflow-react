import { useState, useEffect } from 'react';
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

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && viewModal) {
                setViewModal(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [viewModal]);

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
        <article className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 relative">
            {/* Actions en haut à droite - Taille tactile 44x44px minimum */}
            <div className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-3 flex flex-col gap-0.5 sm:gap-1 z-10">
                <button 
                    onClick={handleViewClick}
                    aria-label="Voir les détails de la story"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center text-gray-600 hover:text-green-600 bg-white hover:bg-green-50 rounded-md shadow-sm border border-gray-200 hover:border-green-300 transition-colors"
                >
                    <Eye size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />
                </button>
                <button 
                    onClick={handleEditClick}
                    aria-label="Modifier la story"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center text-gray-600 hover:text-blue-600 bg-white hover:bg-blue-50 rounded-md shadow-sm border border-gray-200 hover:border-blue-300 transition-colors"
                >
                    <MdEdit size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />
                </button>
                <button 
                    onClick={handleDeleteClick}
                    aria-label="Supprimer la story"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center text-gray-600 hover:text-red-600 bg-white hover:bg-red-50 rounded-md shadow-sm border border-gray-200 hover:border-red-300 transition-colors"
                >
                    <MdDelete size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />
                </button>
            </div>

            {/* Priorité en bas à droite */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10">
                <Flag size={16} className="sm:w-5 sm:h-5" color={priorityColor}/>
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

            {/* Contenu avec padding-right pour éviter chevauchement icônes */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 pr-8 sm:pr-9 md:pr-10 lg:pr-12">
                <div className="flex items-start">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 bg-blue-100 text-blue-700 rounded-full text-[0.625rem] sm:text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0 max-w-full overflow-hidden text-ellipsis">
                        En tant que {role}
                    </span>
                </div>

                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-2">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 bg-green-100 text-green-700 rounded-full text-[0.625rem] sm:text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0">
                        je veux
                    </span>
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium break-words overflow-wrap-anywhere w-full line-clamp-2 pl-2 md:pl-0 sm:pl-3">
                        {action}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-2">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 bg-purple-100 text-purple-700 rounded-full text-[0.625rem] sm:text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0">
                        pour/afin de
                    </span>
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium break-words overflow-wrap-anywhere w-full line-clamp-2 pl-2 md:pl-0 sm:pl-3">
                        {need}
                    </p>
                </div>
            </div>

            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 mr-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            Story #{id}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}
