var moveRing = $('.draggable');
var toTower =  $('.toTower');

$(function () {
  startHanoi();
});

function startHanoi() {
  Drag();
  Drop();
}

// http://api.jqueryui.com/draggable/
function Drag () {
  moveRing.draggable({
    stack: $(moveRing),
    addClasses: "false",
    helper: "clone",
    opacity: 0.35,
    start: function (event, ui) {}
  });
}


$(document).ready(function () {

  var ring = $('.ring');
  var game = $('#game');

  ring.on({
    click: function () {
      $(this).toggleClass("clicked");
      $(this).removeClass("hoverOver");
    },
    mouseenter: function () {
      $(this).addClass("hoverOver");
    },
    mouseleave: function () {
      $(this).removeClass("hoverOver");
    }
  });

  game.on({
    mouseenter: function () {
      $(this).fadeOut(function () {
        $(this).text('Begin').fadeIn('fast').toggleClass("startGame");
      });
    },
    mouseleave: function () {
      $(this).fadeOut(function () {
        $(this).text('Towers of Hanoi').fadeIn('fast').toggleClass("startGame");
      });
    }
  });

});
