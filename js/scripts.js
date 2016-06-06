$(document).ready(function(){
  var suites = ['hearts', 'clubs', 'spades', 'diamonds'];
  var ranks = ['ace', 'king', 'queen', 'jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
  var deck = [];

  suites.forEach(function(suite) {
    ranks.forEach(function(rank) {
      deck.push(rank + " of " + suite);
  });
});
  deck.forEach(function(card) {
    $("ul#cards").append("<li>" + card + "</li>");
  });
});
