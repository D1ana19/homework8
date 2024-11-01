let todoInput = document.getElementById('todoInput');
let timeInput = document.getElementById('timeInput');
let addBtn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

addBtn.onclick = () => {
    let task = todoInput.value;
    let time = (+timeInput.value);

    if(task && time > 0) {
        addTodo(task, time);
        todoInput.value = '';
        timeInput.value = '';
    }
}

const addTodo = (task, time) => {
    let li = document.createElement('li');
    const taskText = document.createElement('span');
    const timeDiv = document.createElement('div');
    const creationTimeDiv = document.createElement('div');
    const buttonDiv = document.createElement('div');
    const doneBtn = document.createElement('div');
    const deleteBtn = document.createElement('div');
    
    taskText.textContent = task;

    timeDiv.setAttribute('class', 'time');
    timeDiv.textContent = `${time}-sec`;

    const now = new Date();
    const creationTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    creationTimeDiv.setAttribute('class', 'creation-time');
    creationTimeDiv.textContent = `Created: ${creationTime}`;

    buttonDiv.setAttribute('class', 'buttons');
    doneBtn.setAttribute('class', 'done-btn');
    doneBtn.textContent = 'Done';
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete';

    buttonDiv.append(doneBtn);
    buttonDiv.append(deleteBtn);

    li.append(taskText);
    li.append(timeDiv);
    li.append(creationTimeDiv);
    li.append(buttonDiv);
    todoList.append(li);

    let interval = setInterval(() => {
        time--;
        timeDiv.textContent = `${time}-sec`;

        if(time <= 0){
            clearInterval(interval);
            li.remove();
        }
    }, 1000);

    doneBtn.onclick = () => {
        if(taskText.getAttribute('class') == 'done'){
            taskText.removeAttribute('class');
        }else{
            taskText.setAttribute('class', 'done');
        }
    }
    
    deleteBtn.onclick = () => {
        clearInterval(interval);
        li.remove();
    }
}