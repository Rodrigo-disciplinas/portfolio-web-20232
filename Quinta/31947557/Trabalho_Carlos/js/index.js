const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('main');


    if(mode.classList.contains('fa-sun')){
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-sharp fa-solid fa-moon');

        form.classList.add('light');

        return;
    }

    mode.classList.add('fa-sun');
    mode.classList.remove('fa-sharp fa-solid fa-moon');
    
    form.classList.remove('light');

})