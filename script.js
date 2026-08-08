document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const taskbarItems = document.querySelectorAll('.taskbar-item');
    const contentSections = document.querySelectorAll('.content-section');
    const ctaButtons = document.querySelectorAll('.cta-button[href^="#"]');

    const showSection = (sectionId) => {
        contentSections.forEach(section => section.classList.remove('active'));

        const targetSection = document.getElementById(sectionId);
        if (targetSection) targetSection.classList.add('active');

        taskbarItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === sectionId) item.classList.add('active');
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    taskbarItems.forEach(item => {
        item.addEventListener('click', () => showSection(item.dataset.section));
    });

    ctaButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = button.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    showSection('home');

    // Contact form demo handler.
    // To make the form actually send emails, connect it to your own EmailJS account.
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            formMessage.textContent = "Please connect your EmailJS account to enable message delivery.";
            formMessage.style.color = "#ffffff";
            contactForm.reset();
        });
    }
});
