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

// Ensure that the DOM is fully loaded before executing functions
document.addEventListener('DOMContentLoaded', function() {
    promptAndDisplayName();
    enlargePicture();
});

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        item.onmouseover = function() {
            this.style.backgroundColor = '#009eb3'; // Example effect
            this.style.color = '#ffffff';
        };

        item.onmouseout = function() {
            this.style.backgroundColor = ''; // Revert on mouse out
            this.style.color = '#0056b3';
        };
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu1').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        var content = document.getElementById('menu1Content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('menu2').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        var content = document.getElementById('menu2Content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
