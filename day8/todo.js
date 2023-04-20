class Todo {
    constructor(id, text, completed) {
        this.id = id;
        this.text = text;
        this.completed = completed
    }
}

class TodoComponent {
    todoId = 1;
    todoList = null;
    todoInput = null;
    addButton = null;
    todoArray = [];
    storageKey = 'todoItems';
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
        this.todoInput = document.querySelector('#todo-input');
        this.addButton = document.querySelector('#add-button');
        this.todoList = document.querySelector('#todo-list');
        this.createView();
        this.registerEvent();
    }


    deleteEvent(todo) {
        const deleteButton = this.todoList.querySelector(`li#todo-${todo.id}>button`);
        deleteButton.addEventListener('click', e => {
            this.todoList.removeChild(e.target.parentElement);
            this.todoArray = this.todoArray.filter(x => x.id !== todo.id);
            sessionStorage.setItem(this.storageKey, JSON.stringify(this.todoArray));
        })
    }

    renderTodo(todo) {
        this.todoList.insertAdjacentHTML('beforeend',
            `<li id="todo-${todo.id}">
                <input type='checkbox' ${todo.completed ? `checked` : ``}/>
                <label>${todo.text}</label>
                <button>X</button>
                </li>`);
        this.deleteEvent(todo);
    }



    createView() {
        document.querySelector(TodoComponent.root).insertAdjacentHTML('beforeend', TodoComponent.template);
        this.todoInput = document.querySelector('#todo-input');
        this.addButton = document.querySelector('#add-button');
        this.todoList = document.querySelector('#todo-list');

        this.todoArray = JSON.parse(sessionStorage.getItem(this.storageKey)) ?? [];
        this.todoArray.forEach(todo => {
            this.renderTodo(todo);
        })

    }


    registerEvent() {
        this.addButton.addEventListener('click', e => {
            this.todoArray = JSON.parse(sessionStorage.getItem(this.storageKey)) ?? [];
            let lastId = this.todoArray.at(-1)?.id;
            this.todoId = lastId ? lastId + 1 : 1;
            const todoItem = new Todo(this.todoId, this.todoInput.value, false);
            this.todoArray.push(todoItem);
            sessionStorage.setItem(this.storageKey, JSON.stringify(this.todoArray));
            this.renderTodo(todoItem);
            this.todoId++;
        })
    }


}

document.addEventListener('DOMContentLoaded', e => {
    new TodoComponent();
})