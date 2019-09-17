const app = require('express')();
const GamesManager = require('./gamesManager');
const port = 3000;

const gamesManager = new GamesManager();
const clientDomain = 'http://localhost:8080';
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', clientDomain);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.get('/player/:nickname/play', (req, res) => res.send(gamesManager.getPlayer(req.params.nickname).playGame()));
app.get('/player/:nickname/move/:x/:y', (req, res) => res.send(gamesManager.getPlayer(req.params.nickname).move(req.params.x,req.params.y)));

const server = app.listen(port, () => console.log(`Server runing at port: ${port}`));
const io = require('socket.io')(server);
io.on('connection', (socket) => { socket.emit('top_players', gamesManager.topTenPlayers); });
gamesManager.on('top_players', data => { io.emit('top_players', data) });