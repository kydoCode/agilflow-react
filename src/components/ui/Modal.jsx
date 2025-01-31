import { X } from "lucide-react";
import { useState } from "react";
import { useStore } from "../../store";

export default function Modal({ modalOpen, setIsModalOpen, editingStory, onSave, isEditing }) {
    const { addStory, updateStory } = useStore();
    const [task, setTask] = useState({ role: '', action: '', need: '', status: 'todo', priority: 'medium' });
    const [editedStory, setEditedStory] = useState(editingStory || { role: '', action: '', need: '', status: 'todo', priority: 'medium' });

    // Fonction qui permet de mettre à jour le state task en fonction des champs de saisie
    const handleInputChange = (e) => {
      const { name, value } = e.target;

      setTask(prevState => ({
        ...prevState,
        [name]: value
      }))

    }

    const handleAddTask = () => {
        // Vérifier que tous les champs sont remplis
        console.log(task);

        addStory({
            role: task.role,
            action: task.action,
            need: task.need,
            status: task.status,
            priority: task.priority,
        });

        setIsModalOpen(false);
      };

    const handleSave = () => {
        updateStory(editedStory.id, editedStory);
        setIsModalOpen(false);
        console.log('Saved!');
    };


    if (isEditing) {
      return(
        <>
        {modalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Update User Story</h2>
          <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="as" className="block text-sm font-medium text-gray-700">
              As a type of user
            </label>
            <select
              id="role"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={editedStory.role}
              onChange={(e) => setEditedStory({ ...editedStory, role: e.target.value })}
            >
              <option value="developer">Developer</option>
              <option value="tester">Tester</option>
              <option value="product owner">Product Owner</option>
              <option value="scrum master">Scrum Master</option>
              <option value="team member">Team Member</option>
            </select>
          </div>
          <div>
            <label htmlFor="iwant" className="block text-sm font-medium text-gray-700">
              I want
            </label>
            <input
              id="iwant"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={editedStory.action}
              onChange={(e) => setEditedStory({ ...editedStory, action: e.target.value })}
              placeholder="I want..."
            />
          </div>
          <div>
            <label htmlFor="need" className="block text-sm font-medium text-gray-700">
              Need
            </label>
            <textarea
              id="need"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={editedStory.need}
              onChange={(e) => setEditedStory({ ...editedStory, need: e.target.value })}
              placeholder="Need..."
              rows={3}
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select
              id="status"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={editedStory.status}
              onChange={(e) => setEditedStory({ ...editedStory, status: e.target.value })}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                      Priority
                    </label>
                    <select
                      id="priority"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      value={editedStory.priority}
                      onChange={(e) => setEditedStory({ ...editedStory, priority: e.target.value })}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => { setEditedStory({ user: '', action: '', need: '', status: 'todo' , priority: 'medium'}); setIsModalOpen(false); }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSave}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
        </>
      )
    }

    return (
        <>
        {modalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
             <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Add new user story</h2>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                    <X size={24} />
                  </button>
                </div>
                <div className="space-y-4">
          <div>
            <label htmlFor="as" className="block text-sm font-medium text-gray-700">
              As a type of user
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={task.role}
              onChange={handleInputChange}
            >
              <option value="developer">Developer</option>
              <option value="tester">Tester</option>
              <option value="product owner">Product Owner</option>
              <option value="scrum master">Scrum Master</option>
              <option value="team member">Team Member</option>
            </select>
          </div>
                  <div>
                    <label htmlFor="action" className="block text-sm font-medium text-gray-700">
                      I want
                    </label>
                    <input
                      id="action"
                      name="action"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      value={task.action}
                      onChange={handleInputChange}
                      placeholder="I want..."
                    />
                  </div>
                  <div>
                    <label htmlFor="need" className="block text-sm font-medium text-gray-700">
                      So that
                    </label>
                    <textarea
                      id="need"
                      name="need"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      value={task.need}
                      onChange={handleInputChange}
                      placeholder="So that..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                      id="status"
                      name="status"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      value={task.status}
                      onChange={handleInputChange}
                    >
                      <option value="todo">Todo</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      value={task.priority}
                      onChange={handleInputChange}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => {setTask({as: '', iwant: '', need: '', status: 'todo'}); setIsModalOpen(false)}}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={handleAddTask}
                    >
                      Add user story
                    </button>
                  </div>
                </div>
             </div>
             </div>
             )}
                </>
    )

}
