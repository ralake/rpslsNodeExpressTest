function Player(name) {
  this.name = name;
}

Player.prototype.choicesMade = [];

Player.prototype.picks = function(pick) {
  this.pick = pick;
  this.choicesMade.push(pick);
};

Player.prototype.randomPick = function() {
   this.computerPicks = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  this.pick = computerPicks[Math.floor(Math.random() * computerPicks.length)];
};

favouritePick = function(arr){
  return arr.sort(function(a,b){
    return arr.filter(function(v){ return v===a; }).length
          - arr.filter(function(v){ return v===b; }).length;
  }).pop();
};

botPick = function(player1, game) {
  var game = game;
  var bot = favouritePick(player1.choicesMade);
  var choices = game.losingPairs[bot];
  var choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.pairs = {
                 rock: { scissors: 'smashes', lizard: 'squashes' },
             scissors: { paper: 'cuts', lizard: 'slices' },
                paper: { rock: 'covers', spock: 'disproves' },
                spock: { scissors: 'smashes' , rock: 'vaporises' },
               lizard: { spock: 'poisons', paper: 'eats' }
};

Game.prototype.losingPairs = {
    rock:     ['paper', 'spock'],
    scissors: ['rock', 'spock'],
    paper:    ['scissors', 'lizard'],
    spock:    ['paper', 'lizard'],
    lizard:   ['scissors', 'rock']
};

Game.prototype.winner = function() {
  if(this.player1.pick === this.player2.pick) { return 'Draw!'; }
  
  if (this.pairs[this.player1.pick][this.player2.pick]) {
    return this.player1;
  }
    return this.player2;
};

Game.prototype.loser = function() {
  if (this.winner() === this.player1) {
    return this.player2;
  }
  return this.player1;
};

Game.prototype.victoryMessage = function() {
  if(this.player1.pick === this.player2.pick) { return 'Draw!'; }
  else {
    var verb = this.pairs[this.winner().pick][this.loser().pick];
    return (this.winner().name + "'s" + " " + this.winner().pick + " " + verb + " " + this.loser().name + "'s" +  " " + this.loser().pick);
  }
};



  