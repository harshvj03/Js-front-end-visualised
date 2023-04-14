document.addEventListener('DOMContentLoaded',() => {
    const div = document.querySelector('div');

    console.log('innerHTML', div.innerHTML);
    console.log('textContent', div.textContent);
    console.log('innerText', div.outerHTML);
    div.insertAdjacentHTML('afterend', div.outerHTML);
    div.insertAdjacentHTML('afterend', div.innerHTML);
    div.insertAdjacentHTML('afterend', div.innerText);
    // div.insertAdjacentHTML('afterend', div.innerHTML);
})