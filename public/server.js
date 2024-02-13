const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 }); // WebSocket server port

let team1Points = 0;
let team2Points = 0;
let lastActionTimestamps = {
    team1: 0,
    team2: 0
};

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        const currentTime = Date.now();
        const team = (Math.random() < 0.5) ? 'team1' : 'team2'; // Randomly assign teams for demonstration

        if (currentTime - lastActionTimestamps[team] > 10000) {
            if (message === '$BOMB') {
                team1Points++;
                lastActionTimestamps.team1 = currentTime;
            } else if (message === '#BLOCK') {
                team2Points++;
                lastActionTimestamps.team2 = currentTime;
            }

            broadcastGameState();
        }
    });
});

function broadcastGameState() {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                team1Points: team1Points,
                team2Points: team2Points
            }));
        }
    });
}
