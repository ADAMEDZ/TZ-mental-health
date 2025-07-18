// Get the tips list element
const tips = document.getElementById("tip-list");

// Add animation classes to list items
document.querySelectorAll('.list-group-item').forEach(item => {
    item.style.transition = 'all 0.5s ease';
});

// Animate stats cards when they come into view
const statsCards = document.querySelectorAll('.stats-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

statsCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// Smooth tip rotation
function rotateTips() {
    if (!tips || !tips.firstElementChild) return;
    
    const first = tips.firstElementChild;
    first.style.opacity = '0';
    first.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        tips.appendChild(first);
        first.style.opacity = '1';
        first.style.transform = 'translateX(0)';
    }, 500);
}

// Start the rotation
setInterval(rotateTips, 4000);

// Add hover effects to images
document.querySelectorAll('.image-container img').forEach(img => {
    img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.03)';
        img.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
});
