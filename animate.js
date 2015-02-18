

$(document).ready(function() {
  console.log("ready!");
  var w = window.innerWidth;
  var h = window.innerHeight;
  var blockwidth = 40;
  var blockheight = 30;
  var gridmaxx = Math.round(w / blockwidth) - 1;
  var gridmaxy = Math.round(h / blockheight);
  console.log( "grid size - x: " + gridmaxx + " y: " + gridmaxy);
  var stacks = new Array( gridmaxx);
  var blues = [ "signblue" , "bluespider", "alaskasky", "bluevelvet", "delft", "midnightblue", "royalblue4"];

  for ( var i = 0; i < stacks.length; i++) {
    stacks[i] = 0;
  }

  var e = 0;

  var float = function(){
    var byte = Math.floor(Math.random() * 256);
    var content = byte.toString(16).toUpperCase();
    if ( content.length == 1 ) content = "0" + content;
    var box = $('.origbox').clone();
    var startgridx = Math.floor((Math.random() * gridmaxx));
    var startx = startgridx * blockwidth;
    var color = blues[Math.floor( Math.random() * blues.length)];

    box.attr('id','box_' + e);
    box.removeClass( 'origbox');
    box.css( 'visibility', 'visible');
    box.css( 'left', startx + "px");
    box.css( 'top', -blockheight + "px");
    console.log( color);
    var txt = box.find(".txt");
    txt.text( content);
    txt.addClass( color);
    box.appendTo("body");

    console.log(box);
    var x = Math.floor((Math.random() * gridmaxx));
    var y = stacks[x];

    console.log( "goto x: " + x + " y: " + y);
    var posx = x * blockwidth;
    var posy = h - (y * blockheight) - blockheight; // stop above screen bottom
    stacks[x] = stacks[x] + 1;

    box.animate(
      {left: posx+"px", top: posy+"px"},
      { duration: 3000,
//        done: function()
//        {
//          float();
//        }
      }
    );
    e = e + 1;
  }

  float();
  setInterval( float, 600);
});
