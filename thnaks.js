// Confetti effect
const confettiSettings = { target: 'confetti', max: 150, size: 1.5, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[255,107,107], [255,159,67], [255,213,79], [76,175,80], [63,81,181], [156,39,176]] };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

// Visitor counter (using localStorage)
document.addEventListener('DOMContentLoaded', () => {
    let count = localStorage.getItem('visitorCount');
    
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count);
    }
    
    count++;
    localStorage.setItem('visitorCount', count.toString());
    
    // Animate the counter
    const counterElement = document.getElementById('visitorCount');
    let current = 0;
    const increment = count / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
            clearInterval(timer);
            current = count;
        }
        counterElement.textContent = Math.floor(current);
    }, 20);
    
    // Add floating balloons dynamically
    for (let i = 0; i < 5; i++) {
        createBalloon();
    }
});

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.textContent = Math.random() > 0.5 ? '🎈' : '🎉';
    
    // Random position
    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;
    const delay = Math.random() * 5;
    const duration = Math.random() * 4 + 4;
    
    balloon.style.left = `${left}%`;
    balloon.style.top = `${top}%`;
    balloon.style.animationDelay = `${delay}s`;
    balloon.style.animationDuration = `${duration}s`;
    
    document.querySelector('.card').appendChild(balloon);
}