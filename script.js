const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.options');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        // add the clicked select style to the select element
        select.classList.toggle('select-clicked');
        // add the rotate style to the caret element
        caret.classList.toggle('caret-rotate');
        // add the open style to the menu element
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        // add click event to option elem
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});