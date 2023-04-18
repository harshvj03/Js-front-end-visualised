class TodoComponent {
    todoId = 1;
    todoList = null;
    todoInput = null;
    addButton = null;
    static root = 'app-root'
    static template = `<div id='main'>
        <h1>Todo App</h1>
        <div>
            <input id='todo-input'/>
            <button id='add-button'>Submit </button>
            <ul id='todo-list'></ul>
        </div>
    </div>`;
    
    constructor() {
        this.createView();
        this.todoInput = document.querySelector('#todo-input');
        this.addButton = document.querySelector('#add-button');
        this.todoList = document.querySelector('#todo-list');
        this.registerEvent();
    }

    createView() {
            document.querySelector(TodoComponent.root).insertAdjacentHTML('beforeend', TodoComponent.template);

    }

    registerEvent() {
        this.addButton.addEventListener('click', e => {
            this.todoList.insertAdjacentHTML('beforeend', 
            `<li id="todo-${this.todoId}">
            <input type='checkbox'/>
            <label>${this.todoInput.value}</label>
            <button>X</button>
            </li>`);

            const deleteButton = this.todoList.querySelector(`li#todo-${this.todoId}>button`);
            deleteButton.addEventListener('click', e => {
                this.todoList.removeChild(e.target.parentElement);
            } )
            this.todoId++;
        })
    }

}

document.addEventListener('DOMContentLoaded', e => {
    new TodoComponent();
})