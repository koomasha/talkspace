<template>
    <div class="top-players">
        <h3> Top 10 players</h3>
        <ul>
            <li v-for="(player, index) in topPlayers" :key="index">
                <div class="top-player">
                    <span>{{player.nickname}}</span>
                    <span>{{player.score}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import io from 'socket.io-client';
export default {
    data() {
        return {
            topPlayers: [],
            socket : io('localhost:3000') 
        }

    },
    mounted () {
        this.socket.on('top_players', (data) => {
            this.topPlayers = data;
        });
    }
}
</script>

<style lang="scss">
    .top-players {

        border-right: 3px solid #bbbbc626;
        ul{
            display: grid;
            .top-player{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 5px;
                justify-content: start;
                align-content: start;
                span {
                    font-style: italic;
                    font-size: 20px;
                }
            }
        }
    }
</style>
