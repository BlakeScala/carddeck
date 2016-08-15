$(document).ready(function() {

  var values = ["2","3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
  var suits = ["Diamonds", "Spades", "Clubs", "Hearts"];

  var cards = [];

  suits.forEach(function(suit){
    values.forEach(function(value){
    cards.push(value + " of " + suit);
    });
  });

  cards.forEach(function(card){
    $("#output").append("<li>" + card + "</li>");
  });
});
