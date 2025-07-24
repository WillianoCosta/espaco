document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Slider de depoimentos
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const sliderDotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });

        updateDots(index);
    }

    function createDots() {
        testimonialItems.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentIndex = i;
                showTestimonial(currentIndex);
            });
            sliderDotsContainer.appendChild(dot);
        });
    }

    function updateDots(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        showTestimonial(currentIndex);
    }

    if (testimonialItems.length > 0) {
        createDots();
        showTestimonial(currentIndex);
        setInterval(nextTestimonial, 7000); // Troca de depoimento a cada 7 segundos
    }

    // Efeito de scroll para o header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)'; // Quase preto transparente
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        } else {
            header.style.backgroundColor = 'var(--color-black)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        }
    });

});
