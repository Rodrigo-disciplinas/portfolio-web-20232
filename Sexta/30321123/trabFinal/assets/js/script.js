/*   MODO ESCURO   */

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

/*   EASTER EGG   */

const button = document.querySelector('.easter-egg');

button.addEventListener('click', () => {
    const div = document.querySelector('.egg');

    if(div.style.display === 'flex'){
        div.style.display = 'none'
    }
    else{
        div.style.display = 'flex';
    }
});