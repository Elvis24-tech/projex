import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="no-tasks-message">No tasks yet. Add one to get started!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;