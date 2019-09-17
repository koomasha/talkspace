# Usage
* npm install
* npm start

# General architecture:
### server:     
* working with port 3000
* have 2 api endpoints:    
    * play game which akso adds new users in case entered nickname doesn't exist
    * make a move
* socket which listen to changes on top 10 players list and emmiting those changes to client
* 3 classes
    * Player - holds player name, current game and base methods for starting/playing the game
    * Game - holds board and game algorithm
    * GamesManager - holds list of players and list of top 10 players

### client:
* vuejs and webpack
* 3 components
    * app - wrapper for game content
    * game - responsible for thegame
    * top players - responsible to show and update the top players


# Assumptions:
* nickname is unique
* there is no authorization proccess, hence access to nickname exists only as long as browser session exist
* on page refresh you should enter nickname again. 