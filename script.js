document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                const nav = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                document.querySelectorAll('.nav-links li').forEach((link, index) => {
                    link.style.animation = '';
                });
            }
        });
    });

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Testimonial Slider
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const sliderDotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;

    function showSlide(index) {
        testimonialItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
        updateDots(index);
    }

    function createDots() {
        testimonialItems.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
            sliderDotsContainer.appendChild(dot);
        });
    }

    function updateDots(index) {
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialItems.length;
        showSlide(currentSlide);
    }

    // Initialize slider
    if (testimonialItems.length > 0) {
        createDots();
        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // --- Nova funcionalidade para o Formulário de Contato ---
    const contactForm = document.querySelector('.contact-form');
    const loadingMessage = document.getElementById('loading-message');
    const hiddenIframe = document.getElementById('hidden_iframe');

    contactForm.addEventListener('submit', function(e) {
        // Exibe a mensagem de "Aguarde"
        loadingMessage.classList.add('active');

        // Configura o handler para quando o iframe terminar de carregar (resposta do Apps Script)
        hiddenIframe.onload = function() {
            loadingMessage.classList.remove('active'); // Esconde a mensagem de "Aguarde"
            contactForm.reset(); // <--- AGORA LIMPA O FORMULÁRIO AQUI, APÓS O ENVIO
            alert('Sua mensagem foi enviada com sucesso!'); // Exibe a confirmação
            hiddenIframe.onload = null; // Limpa o handler para evitar múltiplos disparos
        };
    });
});
