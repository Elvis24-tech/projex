import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Dashboard from './pages/Dashboard'; 
import Projects from './pages/Projects';
import './index.css'; // Import global styles

function App() {
  // Use localStorage to persist tasks between sessions
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
        { id: 1, text: 'Design the new logo', completed: true },
        { id: 2, text: 'Develop the main dashboard', completed: false },
        { id: 3, text: 'Plan the epic launch party!', completed: false },
    ];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now(), // Simple unique ID
      text: taskText,
      completed: false,
    };
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

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
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
        </div>
      </main>
    </div>
  );
}

export default App;