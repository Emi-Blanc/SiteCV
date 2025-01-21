// Bouton de retour en haut de la page
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Affichage/masquage du bouton
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Défilement fluide avec un effet de rebond
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Ajuster la position si besoin
            behavior: 'smooth'
        });
    });
});

// Animation au défilement
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const scrollPosition = window.scrollY + window.innerHeight;

    elements.forEach((element) => {
        if (element.offsetTop < scrollPosition) {
            element.classList.add('visible');
        }
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    let visitCount = sessionStorage.getItem('visitCount') || 0;
    visitCount++;
    sessionStorage.setItem('visitCount', visitCount);

    const counterElement = document.getElementById('visit-count');
    counterElement.textContent = `Ton nombre de visite: ${visitCount}`;
});

// Affichage dynamique des projets
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const description = card.querySelector('.project-description');
        description.style.display = 'block'; // Affiche la description
    });
});

let seconds = 0;
let minutes = 0;

function updateVisitTime() {
    seconds++;

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    document.getElementById("visit-time").textContent = 
        `Ton temps de visite: ${minutes} minutes ${seconds} secondes`;
}

// Mettre à jour le temps toutes les secondes
setInterval(updateVisitTime, 1000);