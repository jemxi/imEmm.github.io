// Add form submission functionality
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Form submitted successfully!');
        });
    }
});
