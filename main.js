const tasks = [];
let time = 0;
let timer = null;   
let timerBreak = null;  
let current = 0;

const bAdd = document.querySelector('bAdd');
const itTask = document.querySelector('itTask');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(itTask.value !== ''){
        create(itTask.value);
        itTask.value = '';
        renderTasks();
    }
})

function createTask(value){
    const newtask = {
        id: (Math.random() * 100).toString(36).slice(3), 
        title: value, 
        completed: false
    };
    tasks.unshift(newtask);
}

function renderTasks(){
    const html = tasks.map(task => {
        return `
        <div class ="task">
            <div class="completed"></div>
            <div class="title"></div>
        </div>
        `; 
        }
    )
}




