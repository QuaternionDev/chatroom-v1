const socket = io.connect('http://' + document.domain + ':' + location.port);

socket.on('message', (message) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    document.getElementById('chat-messages').appendChild(messageDiv);
});

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    socket.emit('message', message);
    messageInput.value = '';
});
