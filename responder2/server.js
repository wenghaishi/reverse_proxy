const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  // Send message to the connected client every 5 seconds
  setInterval(() => {
    const message = `Hello from ${ws._socket.remoteAddress}:${ws._socket.remotePort}!`;
    ws.send(message);
  }, 5000);

  // Handle incoming messages from the client (if needed)
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
});
