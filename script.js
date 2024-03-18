document.addEventListener('DOMContentLoaded', function() {
    // Function to prompt the user for their name and display a greeting.
    function promptAndDisplayName() {
        const button = document.getElementById('promptName');
        button.addEventListener('click', function() {
            const name = prompt('Please enter your name:');
            if(name) { // Only update if a name was entered
                document.getElementById('displayName').innerText = `Hello, ${name}! Welcome to my site.`;
            }
        });
    }

    // Function to toggle the enlargement of the profile picture.
    function enlargePicture() {
        const picture = document.getElementById('profilePic');
        picture.addEventListener('click', function() {
            this.classList.toggle('enlarged');
        });
    }

    // Improving navigation menu interactivity with smoother transitions.
    function enhanceNavInteraction() {
        const navItems = document.querySelectorAll('nav ul li a');
        navItems.forEach(item => {
            item.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#009eb3';
                this.style.color = '#ffffff';
                this.style.transition = 'background-color 0.5s ease-in-out, color 0.5s ease-in-out';
            });
            item.addEventListener('mouseout', function() {
                this.style.backgroundColor = '';
                this.style.color = '#0056b3';
            });
        });
    }

    // Toggle display of menu content for improved interaction.
    function toggleMenuContent() {
        const toggleContentVisibility = (elementId) => {
            const content = document.getElementById(elementId);
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        };

        document.getElementById('menu1').addEventListener('click', function(e) {
            e.preventDefault();
            toggleContentVisibility('menu1Content');
        });

        document.getElementById('menu2').addEventListener('click', function(e) {
            e.preventDefault();
            toggleContentVisibility('menu2Content');
        });
    }

    // Initialize all functions.
    promptAndDisplayName();
    enlargePicture();
    enhanceNavInteraction();
    toggleMenuContent();
});
