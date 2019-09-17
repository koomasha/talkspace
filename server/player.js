var EventEmitter = require('events').EventEmitter;
const uuidv4 = require('uuid/v4');
const Game = require('./game');

module.exports = class Player extends EventEmitter {
    constructor(nickname) {
        super();
        this.nickname = nickname,
        this.score =  0,
        this.gameCounter = 0,
        this.newGame();
    }
    addScore(points) { 
        this.score += points;
        this.emit('scoreChanged', this);
    }
    playGame() {
        if(this.currentGame.finished){
            this.newGame();
        }
        return this.currentGame;                
    }

    newGame(){
        const playerIsX = (this.gameCounter)%2 === 0;
        this.currentGame = new Game(playerIsX);
    }

    move(x,y){
        if(!this.currentGame.finished) {
            this.currentGame.playerMove(x,y);
            if(this.currentGame.finished)
            {
                this.gameCounter++;
                if(this.currentGame.winner === this.currentGame.player){
                    this.addScore(100);
                }
                else if(!this.currentGame.winner){
                    this.addScore(10);
                }                    
            }
        }
        return this.currentGame;
    }
}