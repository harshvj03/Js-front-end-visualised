const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    let p = document.createElement('p');
    p.textContent = 'Button is clicked';
    document.body.appendChild(p);

    console.log(e)
});