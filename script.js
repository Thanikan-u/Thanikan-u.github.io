function promptAndDisplayName() {
    const name = prompt('Please enter your name:');
    if(name) { // Ensure that a name was entered
        document.getElementById('displayName').innerText = `Hello, ${name}! Welcome to my site.`;
    }
}

function enlargePicture() {
    const img = document.getElementById('profilePic');
    img.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
}

function handleNavigationHover() {
    const navItems = document.querySelectorAll('nav ul li a, nav ul li button');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#009eb3'; 
            this.style.color = '#ffffff';
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Revert on mouse out
            this.style.color = '#0056b3';
        });
    });
}

function toggleMenu(menuId) {
    const button = document.getElementById(menuId);
    const contentId = `${menuId}Content`;
    const content = document.getElementById(contentId);
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        content.style.display = isExpanded ? 'none' : 'block';
        this.setAttribute('aria-expanded', !isExpanded);
        content.setAttribute('aria-hidden', isExpanded);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    promptAndDisplayName();
    enlargePicture();
    handleNavigationHover();
    toggleMenu('menu1');
    toggleMenu('menu2');
});
