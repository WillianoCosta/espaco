document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-list li a');

    // Toggle menu para dispositivos móveis
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Fechar o menu ao clicar em um link (para dispositivos móveis)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Animação de rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo de validação de formulário (simples)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos!');
            } else if (!isValidEmail(email)) {
                alert('Por favor, insira um e-mail válido!');
            } else {
                alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
                contactForm.reset(); // Limpa o formulário
                // Aqui você pode adicionar lógica para enviar os dados para um servidor
            }
        });
    }

    function isValidEmail(email) {
        // Expressão regular simples para validação de e-mail
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
