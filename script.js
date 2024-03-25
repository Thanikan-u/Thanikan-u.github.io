function promptAndDisplayName() {
    const name = prompt('Please enter your name:');
    document.getElementById('displayName').innerText = `Hello, ${name}! Welcome to my site.`;
}

function enlargePicture() {
    let isEnlarged = false; // Track image state
    document.getElementById('profilePic').onclick = function() {
        if (!isEnlarged) {
            this.classList.add('enlarged');
            isEnlarged = true;
        } else {
            this.classList.remove('enlarged');
            isEnlarged = false;
        }
    };
}

function handleNavigationHover() {
    const navItems = document.querySelectorAll('nav ul li a, nav ul li button');

    navItems.forEach(item => {
        item.onmouseover = function() {
            this.style.backgroundColor = '#009eb3'; 
            this.style.color = '#ffffff';
        };

        item.onmouseout = function() {
            this.style.backgroundColor = ''; // Revert on mouse out
            this.style.color = '#0056b3';
        };
    });
}

function toggleMenu() {
    ['menu1', 'menu2'].forEach(menuId => {
        const button = document.getElementById(menuId);
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = `${menuId}Content`;
            const content = document.getElementById(contentId);
            const isExpanded = content.style.display === 'block';
            content.style.display = isExpanded ? 'none' : 'block';
            content.setAttribute('aria-hidden', isExpanded);
            button.setAttribute('aria-expanded', !isExpanded);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    promptAndDisplayName();
    enlargePicture();
    handleNavigationHover();
    toggleMenu();
});
