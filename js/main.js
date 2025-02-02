window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/SPA-APP/sw.js')
          .then(() => console.log("Service Worker registered"))
          .catch(err => console.log("Service Worker registration failed:", err));
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
  