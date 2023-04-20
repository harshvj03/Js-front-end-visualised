const TodoComponent = require('./TodoComponent.js');
const TodoSessionStorageService = require('./TodoSessionStorageService.js');

document.addEventListener('DOMContentLoaded', e => {
    new TodoComponent(new TodoSessionStorageService());
})