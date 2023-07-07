const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', ()=>{
    $html.classList.toggle('white-mode');
})