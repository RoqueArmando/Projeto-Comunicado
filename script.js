 function sendMessage(screenId) {
    const message = prompt("Digite uma mensagem:");
    if (message) {
        const messageDiv = document.getElementById(`message${screenId}`);
        messageDiv.innerHTML = `Mensagem: ${message}`;
        // Enviar a mensagem para a outra tela
        const otherScreenId = screenId === 1 ? 2 : 1;
        const otherMessageDiv = document.getElementById(`message${otherScreenId}`);
        otherMessageDiv.innerHTML = `Mensagem recebida: ${message}`;
    }
}
