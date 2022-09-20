const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');


function toggleAddButton() {
   if(todoInput.value) {
		 todoButton.disabled = false;
		 todoButton.classList.add('todo-button');
	 }
	 else {
		 todoButton.disabled = true;
		 todoButton.classList.remove('todo-button');
	 }
}

function addTodo() {
	const h1 = document.createElement('h1');
	const button = document.createElement('button');
	const li = document.createElement('li');
	h1.innerText=todoInput.value;
	button.innerText = 'x';
	button.classList.add('close-button');
	button.addEventListener('click',()=>{
		const parent = button.parentElement;
		parent.remove();
	});
  li.appendChild(h1);
	li.appendChild(button);

	todoList.appendChild(li);
  todoInput.value = '';
	toggleAddButton();
}
todoButton.addEventListener('click',addTodo);
todoInput.addEventListener('keyup',toggleAddButton);
