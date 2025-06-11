function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
