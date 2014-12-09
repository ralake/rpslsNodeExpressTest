$(document).ready(function(){
  var Alex = new Player('Alex');
  var Death = new Player('Death');
  var game = new Game(Alex, Death);

  var remove = function (){
    $(this).remove();
  };

  var rendered = function(game){
    var html = $('#list-item-template').html();
    var data = {message: game.victoryMessage()};
    return Mustache.render(html, data);
  };

  var makePicks = function (pick){
    Alex.picks(pick);
    Death.picks(botPick(Alex, game));
  };

  $('.choices img').on('click', function(){
    makePicks($(this).data('pick'));
    $(rendered(game)).prependTo('#results').slideDown(1000);
    $('li:nth-child(4)').fadeOut(1000,remove);
  });

});

