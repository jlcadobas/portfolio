
    document.addEventListener('mousemove', function(e) {
    const tracker = document.getElementById('tracker');
    const rect = tracker.getBoundingClientRect();
    const offsetX = rect.width / 2;
    const offsetY = rect.height / 2;

    tracker.style.left = (e.clientX - offsetX) + 'px';
    tracker.style.top = (e.clientY - offsetY) + 'px';
    });