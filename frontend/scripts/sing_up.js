document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('input[type="submit"]');

    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/sing_up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Sucesso: faça algo, como redirecionar ou mostrar mensagem
                alert('Cadastro realizado com sucesso!');
            } else {
                // Erro: trate o erro
                alert('Erro ao cadastrar.');
            }
        } catch (error) {
            alert('Erro de conexão.');
        }
    });
});