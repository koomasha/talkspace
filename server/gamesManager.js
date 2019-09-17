var EventEmitter = require('events').EventEmitter;
const Player = require('./player');

module.exports =  class GamesManager  extends EventEmitter{
    constructor() {
        super();
        this.players = {};
        this.topTenPlayers = [];
    }
    getPlayer(nickName) {
        if(!this.players[nickName]) {
            let player = new Player(nickName);
            this.players[nickName] = player;
            player.on('scoreChanged',(player) => this.calculateTopPlayers(player));
            if(this.topTenPlayers.length < 10) {
                this.topTenPlayers.push(player);
                this.emit('top_players', this.topTenPlayers);
            }
        }
        return this.players[nickName]; 
    }

    calculateTopPlayers(player){
        if(this.topTenPlayers[this.topTenPlayers.length-1].score <= player.score){
            if(this.topTenPlayers.filter(x => x.nickName === player.nickName).length == 0 ) {
                this.topTenPlayers.push(player);
            }   
            this.topTenPlayers = this.topTenPlayers.sort((a,b) => a.score < b.score).slice(0,10);
            this.emit('top_players', this.topTenPlayers);
        }
    }
}
