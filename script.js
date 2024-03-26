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
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

document.getElementById('toggleContrast').addEventListener('click', toggleHighContrast);

function toggleMenu() {
    // Correctly set up event listeners for each toggleable menu
    const menuButtons = document.querySelectorAll('button[id^="menu"]');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentId = `${this.id}Content`;
            const content = document.getElementById(contentId);
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            content.style.display = isExpanded ? 'none' : 'block';
            this.setAttribute('aria-expanded', !isExpanded);
            content.setAttribute('aria-hidden', isExpanded.toString());
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

// Function to toggle high contrast mode
function toggleHighContrast() {
    const body = document.body;
    body.classList.toggle('high-contrast');

    const isHighContrast = body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast ? 'true' : 'false');

    // Update the text content of the high contrast toggle button
    const highContrastToggleButton = document.getElementById('highContrastToggle');
    if (highContrastToggleButton) {
        highContrastToggleButton.textContent = isHighContrast ? 'Disable High Contrast' : 'Enable High Contrast';
    }
}

// Load the high contrast setting on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    promptAndDisplayName();
    enlargePicture();
    handleNavigationHover();
    toggleMenu();

    const highContrastPreference = localStorage.getItem('highContrast') === 'true';
    if (highContrastPreference) {
        document.body.classList.add('high-contrast');
    }

    // Attach the toggleHighContrast function to the button
    const highContrastToggle = document.getElementById('highContrastToggle');
    if (highContrastToggle) {
        highContrastToggle.addEventListener('click', toggleHighContrast);
    }

    // Correcting the form submission event listener
    const formSubmitButton = document.getElementById('formSubmit'); // Ensure this ID exists on your submit button
    if (formSubmitButton) {
        formSubmitButton.addEventListener('click', function(event) {
            event.preventDefault();
            submitForm();
        });
    }
});


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