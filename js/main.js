// main.js - Funcionalidad completa para el sitio web de Panadería Delicias

document.addEventListener('DOMContentLoaded', function() {

    // Toggle menú hamburguesa en móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            const hamburger = document.querySelector('.hamburger');
            hamburger.classList.toggle('active');
        });
    }

    // Manejo del formulario de newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            if (email) {
                alert(`¡Gracias por suscribirte, ${email}! Pronto recibirás nuestras delicias en tu bandeja de entrada.`);
                newsletterForm.reset();
            }
        });
    }

    // Filtro de productos por categoría
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Quitar clase 'active' de todos
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Añadir 'active' al botón clicado
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                products.forEach(product => {
                    if (filterValue === 'all' || product.getAttribute('data-category') === filterValue) {
                        product.style.display = 'block';
                        product.style.opacity = '0';
                        setTimeout(() => {
                            product.style.opacity = '1';
                        }, 50);
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
    }

    // Validación y envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener valores
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            // Validación básica
            if (!name || !email || !subject || !message) {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Por favor, introduce un correo electrónico válido.');
                return;
            }

            // Simular envío
            alert(`¡Gracias, ${name}! Hemos recibido tu mensaje sobre "${subject}" y te responderemos pronto a ${email}.`);

            // Resetear formulario
            contactForm.reset();
        });
    }

    // Efecto de scroll suave para enlaces internos (si se usan en el futuro)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});