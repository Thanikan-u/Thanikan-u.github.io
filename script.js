function promptAndDisplayName() {
    document.getElementById('promptName').onclick = function() {
        const name = prompt('Please enter your name:');
        document.getElementById('displayName').innerText = `Hello, ${name}! Welcome to my site.`;
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
    };
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
        });
    });
}
function changeFontSize(action) {
    const body = document.body;
    let currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
    if (action === 'increase') {
        body.style.fontSize = `${currentFontSize + 1}px`;
    } else if (action === 'decrease') {
        body.style.fontSize = `${currentFontSize - 1}px`;
    } else if (action === 'reset') {
        body.style.fontSize = ''; // Reset to default
    }
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
function changeColorScheme(scheme) {
    document.body.className = scheme;
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
