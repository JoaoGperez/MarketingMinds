document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Captura de dados do formulário
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        // Validação dos campos
        if (!name || !email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Objeto para armazenar os dados
        const formData = {
            name: name,
            email: email
        };

        // Armazenamento no localStorage
        localStorage.setItem('contactFormData', JSON.stringify(formData));
                // Exibição dos dados armazenados no console
                const storedData = localStorage.getItem('contactFormData');
                console.log('Dados armazenados:', JSON.parse(storedData));

        // Limpeza do formulário
        const form = document.getElementById('contact-form');
        if (form && typeof form.reset === 'function') {
            form.reset();
        } else {
            console.error('Elemento com ID "contact-form" não é um formulário ou não possui o método reset.');
        }

        // Exibir o modal
        const modal = document.getElementById('success-modal');
        const span = document.getElementsByClassName('close')[0];

        modal.style.display = 'block';

        span.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });
});
