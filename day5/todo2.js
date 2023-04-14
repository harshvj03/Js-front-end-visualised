document.addEventListener('DOMContentLoaded', (event) => {
    let todoId = 0;
    const root = document.querySelector('app-root');
    const template = `<div>
        <h1>Todo App</h1>
        <input id="todo-input"  />
        <button id="add-button">Submit</button>
        <ul id="todo-list"></ul>
    </div>`

    root.insertAdjacentHTML('beforeend', template);

    document.querySelector('#add-button')
        .addEventListener('click', () => {
            const todoText = document.querySelector('#todo-input').value;
            const todoList = document.querySelector('#todo-list');
            todoList
                .insertAdjacentHTML('beforeend',
                    `<li id="todo-${todoId}">
            <input type='checkbox'/>
            <label>${todoText}</label>
            <button>X</button>
            </li>`
                );

            const deleteButton = todoList.querySelector(`li#todo-${todoId}>button`);
            deleteButton.addEventListener('click', event => {
                const findLi = event.target.parentElement;
                todoList.removeChild(findLi);
            });
            todoId++;
        });
});