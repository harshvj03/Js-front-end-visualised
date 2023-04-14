document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#my-button');
    const input = document.querySelector('#my-input');
    const todoList = document.querySelector('#todo-list');
    if (input.value == '') {
        button['disabled'] = true;
    }

    input.addEventListener('change', () => {
        button['disabled'] = false;
        if(input.value === '') {
        button['disabled'] = true;

        }
    })

    button.addEventListener('click', () => {
        if (input.value === '') {
            button['disabled'] = true;
            return;
        }
        console.log(input.value);
        let li = document.createElement('li');
        li.innerHTML = input.value;
        todoList.appendChild(li);
        input.value = ''
        input.disabled = false;
    })

    // setInterval(() => {
    //     alert('Hi from internal');
    // }, 5000);

    const enableInput = () => {
        console.log('aaaa')
        input['disabled'] = false;
    }
    document.addEventListener('onkeydown', enableInput)



}) 