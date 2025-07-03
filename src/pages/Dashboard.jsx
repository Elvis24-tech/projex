import React, { useState, useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

// This component now contains all the logic that was previously in App.jsx
function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
        { id: 1, text: 'Design the new logo', completed: true },
        { id: 2, text: 'Develop the main dashboard', completed: false },
        { id: 3, text: 'Plan the epic launch party!', completed: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h2>Today's Tasks</h2>
        <div className="progress-tracker">
          <span>{completedCount} / {totalCount} Completed</span>
          <progress value={completedCount} max={totalCount}></progress>
        </div>
      </div>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
      />
      {completedCount > 0 && (
         <div className="card-footer">
            <button className="btn-danger" onClick={handleClearCompleted}>
                Clear All Completed
            </button>
         </div>
      )}
    </div>
  );
}

export default Dashboard;