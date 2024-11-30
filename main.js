let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let todoList = document.getElementById('todo-list');

function addTodo() {
  let task = todoInput.value.trim();

  if (task === "") {
    alert("Please enter a valid task!");
    return;
  }

  let li = document.createElement('li');
  li.textContent = task; 

  li.addEventListener('click', function () {
    li.classList.toggle('done');
  });

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X'; 
  deleteBtn.classList.add('delete-btn'); 

  deleteBtn.addEventListener('click', function (event) {
    event.stopPropagation();

    let confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      li.remove();
    }
  });

  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  todoInput.value = '';
}

addBtn.addEventListener('click', addTodo);
