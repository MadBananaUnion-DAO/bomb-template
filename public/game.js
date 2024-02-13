const socket = new WebSocket('ws://localhost:3000'); // Change the URL to your server's WebSocket URL

document.getElementById('bombBtn').addEventListener('click', () => {
    socket.send('$BOMB');
});

document.getElementById('blockBtn').addEventListener('click', () => {
    socket.send('#BLOCK');
});
