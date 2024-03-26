function promptAndDisplayName() {
    document.getElementById('promptName').onclick = function() {
        const name = prompt('Please enter your name:');
        if (name) {
            document.getElementById('displayName').innerText = `Hello, ${name}! Welcome to my site.`;
        }
    };
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
        const profilePic = document.getElementById('profilePic');
        profilePic.addEventListener('click', function() {
            this.classList.toggle('enlarged');
        });
    }
}

function handleNavigationHover() {
    const navItems = document.querySelectorAll('nav ul li a');

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
        document.getElementById(menuId).addEventListener('click', function(e) {
            e.preventDefault();
            var contentId = `${menuId}Content`;
            var content = document.getElementById(contentId);
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            const button = document.getElementById(menuId);
            const menuContent = document.getElementById(contentId); // Changed variable name
            button.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                menuContent.style.display = isExpanded ? 'none' : 'block'; // Updated variable reference
                this.setAttribute('aria-expanded', !isExpanded);
                menuContent.setAttribute('aria-hidden', !isExpanded); // Updated variable reference
            });
        });
    });
}


function submitForm() {
    const form = document.getElementById('myContactForm');
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
        localStorage.setItem(key, value);
    }
    alert('Your form has been submitted successfully!');
    form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    promptAndDisplayName();
    enlargePicture();
    handleNavigationHover();
    toggleMenu();

    document.getElementById('formSubmit').onclick = function(event) {
        event.preventDefault();
        submitForm();
    };
});