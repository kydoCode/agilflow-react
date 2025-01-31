import { useState } from 'react';
import { FiFlag } from 'react-icons/fi'; // replaced by Flag from lucid-react
import { Flag } from "lucide-react";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import Modal from './Modal';
import { useStore } from '../../store';

export default function Card({ id, assignee, action, need, status, priority }) {
    const { deleteStory, updateStory } = useStore();

    const [editModal, setEditModal] = useState(false);
    const [modalId, setModalId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setEditModal(true);
        setModalId(id);
        setIsModalOpen(true);
        setIsEditing(true);
    };

    const handleDeleteClick = () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette story ?')) {
            deleteStory(id);
        }
    };

    const handleSaveEdit = (editedStory) => {
        updateStory(id, editedStory);
        setIsModalOpen(false);
        setIsEditing(false);
    };

    const getPriorityColor = (priority) => {
        console.log("Priority value:", priority); // Debug log
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
        <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 relative">
            <div className="absolute top-4 right-4 flex space-x-2">
                <button aria-label="Edit" className="text-gray-500 hover:text-blue-500">
                    <MdEdit onClick={handleEditClick} size={20} />
                </button>
                <button aria-label="Delete" className="text-gray-500 hover:text-red-500">
                    <MdDelete onClick={handleDeleteClick} size={20} />
                </button>
            </div>

             <div className="absolute bottom-4 right-4">
                    <Flag size={20} color={priorityColor}/>
                </div>


            <Modal
                modalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                editingStory={{ id, assignee, action, need, status }}
                onSave={handleSaveEdit}
                isEditing={isEditing}
            />

            <div className="space-y-4">
                <div className="flex items-start space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        En tant que {assignee?.role}
                    </span>
                </div>

                <div className="flex items-start space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        je veux
                    </span>
                    <p className="text-gray-800 font-medium pt-1">
                        {action}
                    </p>
                </div>

                <div className="flex items-start space-x-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        pour/afin de
                    </span>
                    <p className="text-gray-800 font-medium pt-1">
                        {need}
                    </p>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
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
