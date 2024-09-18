
function Todo() {
    const todoInput = document.querySelector('#todo-input');
    const todoList = document.querySelector('#todo-list');
  
    if (todoInput.value === '') {
      alert('Please enter a task');
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = todoInput.value;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';


    deleteButton.onclick = function () {
      todoList.removeChild(li);
    };
  
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  
    todoInput.value = '';
  }
  