import React from 'react';
import { FiEdit3 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const Todo = ({ task, deleteTodo, editTodo }) => {
  const handleEditClick = () => {
    editTodo(task.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(task.id);
  };

  return (
    <div className='flex justify-between items-center bg-violet-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
      <p className='font-primary'>{task.task}</p>
      <div className='flex items-center gap-x-4'>
        <FiEdit3 className="text-xl" onClick={handleEditClick} />
        <FaTrash className="text-xl" onClick={handleDeleteClick} />
      </div>
    </div>
  );
}

export default Todo;
