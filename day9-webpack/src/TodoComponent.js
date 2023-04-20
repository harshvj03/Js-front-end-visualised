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

    constructor(service) {
       
        this.service = service;
        this.createView();
        this.registerEvent();
    }


    deleteEvent(todo) {
        this.todoList.querySelector(`li#todo-${todo.id}>button`).addEventListener('click', e => {
            this.todoList.removeChild(e.target.parentElement);
            this.service.removeTodo(todo.id);
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

        this.service.getAllTodos()?.forEach(x => this.renderTodo(x));
    }


    registerEvent() {
        this.addButton.addEventListener('click', e => {
            const todoItem = this.service.addTodo(this.todoInput.value, false);
            this.renderTodo(todoItem);
        })
    }


}

module.exports = TodoComponent;