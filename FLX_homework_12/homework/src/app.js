const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];
let firstNumberOfList = 0;
//icons
let iconDelete = '<img src="assets/img/remove-s.jpg">';
let iconCheck = '<img src="assets/img/todo-s.png">';
let iconDone = '<img src="assets/img/done-s.png">';
//firstPage
let firstPage = document.createElement('div');
firstPage.id = 'first';
let firstTitle = document.createElement('h1');
firstTitle.innerHTML = 'Simple TODO application';
let addLink = document.createElement('a');
addLink.setAttribute = ('href', '#2');
let todoButton = document.createElement('button');
todoButton.innerHTML = 'Add new task';
let taskList = document.createElement('ul');
taskList.id = 'todo-list';
let defaultMessage = document.createElement('p');
defaultMessage.id = 'empty-list'
defaultMessage.innerHTML = 'TODO is empty';

rootNode.appendChild(firstPage);
firstPage.appendChild(firstTitle);
firstPage.appendChild(addLink);
addLink.appendChild(todoButton);
firstPage.appendChild(taskList);
firstPage.appendChild(defaultMessage);
//second page
let secondPage = document.createElement('div');
secondPage.id = 'second';
let secondTitle = document.createElement('h1');
secondTitle.innerHTML = 'Add task';
let taskField = document.createElement('input');
taskField.id = 'task-field';
let cancelTaskButton = document.createElement('button');
cancelTaskButton.classList.add('cancel-btn');
cancelTaskButton.id = 'cancel-new-task';
cancelTaskButton.innerHTML = 'Cancel';
let saveTaskButton = document.createElement('button');
saveTaskButton.classList.add('save-btn');
saveTaskButton.id = 'save-new-task'
saveTaskButton.innerHTML = 'Save changes';

rootNode.appendChild(secondPage);
secondPage.appendChild(secondTitle);
secondPage.appendChild(taskField);
secondPage.appendChild(cancelTaskButton);
secondPage.appendChild(saveTaskButton);
//third page
let thirdPage = document.createElement('div');
thirdPage.id = 'third';
let thirdTitle = document.createElement('h1');
thirdTitle.innerHTML = 'Modify item';
let modifyField = document.createElement('input');
let cancelChangeButton = document.createElement('button');
cancelChangeButton.classList.add('cancel-btn');
cancelChangeButton.innerHTML = 'Cancel';
let saveChangeButton = document.createElement('button');
saveChangeButton.classList.add('save-btn');
saveChangeButton.innerHTML = 'Save changes';

rootNode.appendChild(thirdPage);
thirdPage.appendChild(thirdTitle);
thirdPage.appendChild(modifyField);
thirdPage.appendChild(cancelChangeButton);
thirdPage.appendChild(saveChangeButton);

document.getElementById('second').style.display = 'none';
document.getElementById('third').style.display = 'none';

if (todoButton) {
  todoButton.addEventListener('click', function() {
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'flex';
});
}

let saveButton = document.getElementById('save-new-task');
if (saveButton) {
  saveButton.addEventListener('click', function() {
    
  let value = document.getElementById('task-field').value;
    if (value) {
      document.getElementById('task-field').value = '';
      addItemTodo(value);
    }
  });
}

let cancelButton = document.getElementById('cancel-new-task');
if (cancelButton) {
  cancelButton.addEventListener('click', function() {
  document.getElementById('first').style.display = 'flex';
  document.getElementById('second').style.display = 'none';
  document.getElementById('third').style.display = 'none';
  });
}

function removeTask() {
  let task = this.parentNode;
  let parent = task.parentNode;
  parent.removeChild(task);
}
function completeTask() {
  let task = this;
  task.innerHTML = iconDone;
}
function addItemTodo(text) {
  let list = document.getElementById('todo-list');
  let task = document.createElement('li');
  task.innerText = text;
  document.getElementById('first').style.display = 'flex';
  document.getElementById('second').style.display = 'none';
  document.getElementById('empty-list').style.display = 'none';

  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = iconDelete;
  remove.addEventListener('click', removeTask);
  
  let check = document.createElement('button');
  check.classList.add('check');
  check.innerHTML = iconCheck;
  check.addEventListener('click', completeTask);

  task.appendChild(remove);
  task.appendChild(check);
  
  list.insertBefore(task, taskList.childNodes[firstNumberOfList]);
}

    