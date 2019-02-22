let footerLogo = document.getElementById('logo-wrapper');
let logoImg = document.createElement('IMG');
logoImg.src = './assets/img/cat.png';
logoImg.alt = 'cat_paw';
logoImg.classList.add('image-logo');
footerLogo.appendChild(logoImg);

let iconDelete = '<i class="material-icons right">delete</i>';
let iconCheck = '<i class="material-icons">check_box_outline_blank</i>';
let iconDone = '<i class="material-icons" id="doneImg">check_box</i>';

const MAX_ITEM = 10;
const ZERO = 0;
let arrList = document.getElementsByTagName('li');

let newTask = document.getElementById('action-button');

newTask.addEventListener('click', addCatTask);

function addCatTask() {
  if(arrList.length < MAX_ITEM) {
		let wrapper = document.getElementById('list-wrapper');
	
    let task = document.createElement('li');
    task.classList.add('cat-task');    

    let checkTask = document.createElement('button');
    checkTask.classList.add('check-task');
    checkTask.innerHTML = iconCheck;
    checkTask.addEventListener('click', doneTask);

    let textTask = document.createElement('p');
    textTask.classList.add('text-task');
    let valueText = document.getElementById('action-text').value;

    if (valueText) {
      document.getElementById('action-text').value = '';
      textTask.innerHTML = valueText;
    } else {
			document.querySelector('button').disabled = true;
		
      return;
    }

    let delTask = document.createElement('button');
    delTask.classList.add('delete-task');
    delTask.innerHTML = iconDelete;
    delTask.addEventListener('click', deleteTask);
       
    wrapper.appendChild(task);
    task.appendChild(checkTask);
    task.appendChild(textTask);
    task.appendChild(delTask);
  } else {
    document.getElementById('action-text').disabled = true;
    document.getElementById('action-button').disabled = true;
    document.getElementById('title').innerHTML = 'Maximum item per list are created'; 
    document.getElementById('title').style.color = 'red';      
  }
}

function doneTask() {
  let checkTask = this;
  checkTask.innerHTML = iconDone;
}

function deleteTask() {
  this.parentElement.remove();   
  if (arrList.length < MAX_ITEM) {
    document.getElementById('action-text').disabled = false;
    document.getElementById('action-button').disabled = false;
    document.getElementById('title').innerHTML = 'TODO Cat List';
    document.getElementById('title').style.color = 'black';  
  }
}