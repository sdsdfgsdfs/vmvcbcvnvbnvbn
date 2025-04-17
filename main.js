function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    event.stopPropagation();
    
    
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu.id !== dropdownId) {
            menu.classList.remove('dropdown-show');
            menu.previousElementSibling.classList.remove('active');
        }
    });
    
    
    const dropdown = document.getElementById(dropdownId);
    const button = dropdown.previousElementSibling;
    
    dropdown.classList.toggle('dropdown-show');
    button.classList.toggle('active');
}


function toggleAccordion(button) {
    const item = button.parentElement;
    const content = button.nextElementSibling;
    
    button.classList.toggle('active');
    content.classList.toggle('active');
    
    
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(accordionItem => {
        if (accordionItem !== item) {
            accordionItem.querySelector('.accordion-header').classList.remove('active');
            accordionItem.querySelector('.accordion-content').classList.remove('active');
        }
    });
}


document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('dropdown-show');
            menu.previousElementSibling.classList.remove('active');
        });
    }
});
