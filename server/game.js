module.exports = class Game  {
    
    constructor(playerIsX) {
        this.board = [...Array(3)].map(x=>Array(3).fill(null));
        this.finished = false;
        this.winner = null;

        if(playerIsX){
            this.player = 'X';
            this.server = 'O';
        }
        else{
            this.player = 'O';
            this.server = 'X';
            this.serverMove();
        }
    }

    serverMove(){
        let rand = Math.floor(Math.random() * 9);
        let x,y;

        // go next cell if full
        do {
            rand = (rand+1)%9;
            x = Math.floor(rand/3)
            y = rand%3;
        }
        while (this.board[x][y]);
        
        this.board[x][y] = this.server;
    }

    playerMove(x, y) {
        if(!this.board[x][y]){
            this.board[x][y] = this.player;
            if(!this.checkWin()){
                this.serverMove();
                this.checkWin();
            }
        }
    }

    checkWin(){
        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            if(this.checkSequence([i,0],[i,1],[i,2])) return true;
            if(this.checkSequence([0,i],[1,i],[2,i])) return true;
        }

        // check diagonal line
        if(this.checkSequence([0,0],[1,1],[2,2])) return true;
        if(this.checkSequence([0,2],[1,1],[2,0])) return true;

        // check tie
        let allFull = true;
        for (let i =0; i < 3; i++) {
            for (let j =0; j < 3; j++) {
                if(!this.board[i][j]){
                    allFull = false;
                }
            }
        }
        if(allFull){
            this.finished = true;
            return true;
        }

        // no tie and no winner
        return false;
    }

    checkSequence(p1,p2,p3){
        if(this.board[p1[0]][p1[1]] && 
            this.board[p1[0]][p1[1]] === this.board[p2[0]][p2[1]] && 
            this.board[p1[0]][p1[1]] === this.board[p3[0]][p3[1]]){
                
            this.finished = true;
            this.winner = this.board[p1[0]][p1[1]];
            return true;
        }
        return false;
    }
}