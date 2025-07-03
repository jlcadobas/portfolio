
    document.addEventListener('mousemove', function(e) {
        // Get necessary element for #tracker div for the glow effect
        const tracker = document.getElementById('tracker');
        const rect = tracker.getBoundingClientRect();
        const offsetX = rect.width / 2;
        const offsetY = rect.height / 2;

        // Get necessary element for adding classes for the navigation links (About, Experience and Projects)
        const links = document.querySelectorAll('.link-container a');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove 'active' from all links
                links.forEach(l => l.classList.remove('active'));

                // Add 'active' to the clicked one
                link.classList.add('active');
            });
        });

        tracker.style.left = (e.clientX - offsetX) + 'px';
        tracker.style.top = (e.clientY - offsetY) + 'px';
    });