const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');

    select.addEventListener('click', () => {
        // add the clicked select style to the select element
        select.classList.toggle('select-clicked');
        // add the rotate style to the caret element
        caret.classList.toggle('caret-rotate');
        // add the open style to the menu element
        menu.classList.toggle('menu-open');
    });
});