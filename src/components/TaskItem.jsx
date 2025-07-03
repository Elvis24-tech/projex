import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content" onClick={() => onToggleComplete(task.id)}>
        <span className="checkbox"></span>
        <p>{task.text}</p>
      </div>
      <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default TaskItem;