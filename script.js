document.addEventListener('DOMContentLoaded', () => {
    const aristocratBtn = document.getElementById('aristocratBtn');
    const aristocratAudio = document.getElementById('aristocratAudio');
    let isPlaying = false;

    aristocratBtn.addEventListener('click', () => {
        if (isPlaying) {
            aristocratAudio.pause();
            aristocratAudio.currentTime = 0;
            aristocratBtn.textContent = 'Aristocrat';
        } else {
            aristocratAudio.play();
            aristocratBtn.textContent = 'Stop';
        }
        isPlaying = !isPlaying;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
}); 