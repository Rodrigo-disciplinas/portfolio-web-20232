const checkbox = document.querySelector('.checkbox');
const body = document.querySelector('body');

checkbox.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});
