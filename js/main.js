window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js');
    }
  };
  
  function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
  
    if (taskInput.value !== '') {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  