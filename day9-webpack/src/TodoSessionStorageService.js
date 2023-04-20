const Todo = require('./Todo.js');

class TodoSessionStorageService {
    data = [];
    todoId = 0;
    storageKey = 'todoData';

    constructor() {
        this.load();
    }

    //C
    addTodo(text, completed) {
        const todo = new Todo(++this.todoId, text, completed);
        this.data?.push(todo);
        this.save();
        return todo;
    }

    //R
    getAllTodos() {
        return this.todoArray;
    }

    load() {
        this.data = JSON.parse(sessionStorage.getItem(this.storageKey));
    }

    save() {
        sessionStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    removeTodo(id) {
        this.data = this?.data?.filter(x => x.id !== id);
        this.save();
    }
}

module.exports = TodoSessionStorageService;