// Smooth scroll for lesson navigation
function scrollToLessons() {
    document.getElementById('lessons').scrollIntoView({ behavior: 'smooth' });
}

// Navigate to lesson page
function navigateToLesson(lessonId) {
    window.location.href = `pages/lesson-${lessonId}.html`;
}

// Update active nav link
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.style.display = 'none';
        }
    });
});

// Map initialization functions
function initializeMap(mapId, lat, lng, zoom = 8) {
    if (!document.getElementById(mapId)) return;
    
    const map = L.map(mapId).setView([lat, lng], zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    return map;
}

// Add marker to map
function addMarker(map, lat, lng, title, description = '') {
    const marker = L.circleMarker([lat, lng], {
        radius: 8,
        fillColor: '#e8b923',
        color: '#1a472a',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);

    if (title || description) {
        marker.bindPopup(`<strong>${title}</strong><br>${description}`);
    }

    return marker;
}

// Add historical region to map
function addHistoricalRegion(map, name, bounds, color = '#e8b923') {
    const rectangle = L.rectangle(bounds, {
        color: color,
        weight: 2,
        opacity: 0.7,
        fillOpacity: 0.1
    }).addTo(map);

    rectangle.bindPopup(`<strong>${name}</strong>`);
    return rectangle;
}

// Navigate between lessons
function previousLesson(lessonId) {
    const lessons = ['ancient', 'medieval', 'ottoman', 'renaissance', 'liberation', 'modern'];
    const currentIndex = lessons.indexOf(lessonId);
    if (currentIndex > 0) {
        window.location.href = `lesson-${lessons[currentIndex - 1]}.html`;
    }
}

function nextLesson(lessonId) {
    const lessons = ['ancient', 'medieval', 'ottoman', 'renaissance', 'liberation', 'modern'];
    const currentIndex = lessons.indexOf(lessonId);
    if (currentIndex < lessons.length - 1) {
        window.location.href = `lesson-${lessons[currentIndex + 1]}.html`;
    }
}

function goHome() {
    window.location.href = '../index.html';
}
