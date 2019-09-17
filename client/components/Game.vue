<template>
    <div>
        <div v-if="!gameStarted" class="new-player">
            <label>Please choose a nickname</label>
            <input type="text" v-model="nickname"/>
        </div>
        <div class="messages">
            <button v-if="!gameStarted || winner || tie" @click="startGame">New Game</button>
            <div v-if="winner == playerType" class="win">You won the game!!!</div>
            <div v-if="winner && winner != playerType" class="lost">You lost the game...</div>
            <div v-if="tie" class="tie">Make love, not war</div>
        </div>
        <div v-if="gameStarted" class="board" @click="move">
            <div class="row" v-for="(row, x) in board" :key="x"><div :x = "x" :y = "y" class="cell" v-for="(val, y) in row" :key="y">{{val}}</div></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nickname: null,
            gameStarted: false,
            playerType: 'X',
            winner: null,
            tie: null,
            board: [],
        }

    },
    methods: {
        startGame() {
                fetch(`http://localhost:3000/player/${encodeURIComponent(this.nickname)}/play`).then(response => response.json()).then(response => {
                this.gameStarted = true;
                this.winner = null;
                this.tie = null;
                this.playerType = response.player;
                this.board = response.board;
            });
        }, 
        move(e) {
            if(e.target.className.indexOf('cell') === 0 && !e.target.innerText) {
                let x = e.target.attributes.x.value;
                let y = e.target.attributes.y.value;
                fetch(`http://localhost:3000/player/${encodeURIComponent(this.nickname)}/move/${x}/${y}`).then(response => response.json()).then(response => {
                    this.board = response.board;
                    if(response.finished) {
                        (response.winner) ? this.winner = response.winner : this.tie = true;
                    }
                });
            }
        },
    }
}
</script>

<style lang="scss">
    .new-player {
            display: grid;
            grid-template-rows: 1fr 1fr;
        input {
            margin: 0 auto;
        }
    }
    .messages {
        margin: 10px;
        div {
            margin: 10px;
            font-size: 25px;
            font-weight: bold;
            &.win {
              color: #20da20cf;  
            }
            &.lost {
                color: #ff2d2deb;
            }
            &.tie {
                color: #2d62ffeb;
            }
        }
    }
    .board {
        width: 450px;
        height: 450px;
        margin: 0 auto;
        color: #808890;
        border: 6px solid #808890;
        border-radius: 10px;
        display: grid;
        grid-template-rows: repeat(3, 1fr); 
        .row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            .cell {
                border: 6px solid #808890;
                border-radius: 2px;
                font-family: Helvetica;
                font-weight: bold;
                font-size: 4em;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
