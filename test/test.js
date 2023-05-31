const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('WebSocket connection established.');

  ws.onmessage = function(event) {
    const message = event.data.toString(); // Convert the received data to a string
    console.log('Received message:', message);
  };
  
});

ws.on('close', () => {
  console.log('WebSocket connection closed.');
});
