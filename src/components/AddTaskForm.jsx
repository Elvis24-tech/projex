import React, { useState } from 'react';
function AddTaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return; // Don't add empty tasks
    onAddTask(taskText);
    setTaskText('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new epic task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default AddTaskForm;