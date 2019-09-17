<template>
  <div id="app">
    <TopPlayers></TopPlayers>
    <Game></Game>
  </div>
</template>

<script>
import TopPlayers from './components/TopPlayers.vue';
import Game from './components/Game.vue';
export default {
  name: 'app',
    components: {
      TopPlayers,
      Game
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height:100vh;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input {
    padding: 8px;
    font-size: 16px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 3px;
}
button {
	-moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
	-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #e9e9e9));
	background:-moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);
	background-color:#f9f9f9;
	-moz-border-radius:6px;
	-webkit-border-radius:6px;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:15px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
  &:hover {
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, #f9f9f9));
    background:-moz-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
    background:-webkit-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
    background:-o-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
    background:-ms-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
    background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='#f9f9f9',GradientType=0);
    background-color:#e9e9e9;
  }
}
</style>
