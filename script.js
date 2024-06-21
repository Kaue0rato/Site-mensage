document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (password === 'Maya') {
        window.location.href = 'mensagem.html';
    } else {
        errorMessage.textContent = 'Nome incorreto. Tente novamente.';
    }
});

function saveResponse(response) {
    // Salvar resposta no Firebase
    firebase.database().ref('responses').push({
        response: response
    }, function(error) {
        if (error) {
            alert('Erro ao salvar resposta.');
        } else {
            window.location.href = 'resposta.html';
        }
    });
}


