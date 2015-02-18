var shadesOfBlue = [ "signblue" , "bluespider", "alaskasky", "bluevelvet", "delft", "midnightblue", "royalblue4"];
var width = window.innerWidth;
var height = window.innerHeight;
var blockwidth = 40; // px
var blockheight = 30; // px
// grid size
var gridwidth = Math.round(width / blockwidth) - 1; // no clipped block at right end
var gridheight = Math.round(height / blockheight);
console.log( "grid size - x: " + gridwidth + " y: " + gridheight);
// stacks to place the blocks on
var stacks = new Array( gridwidth);

// the number of the current element
var numEl = 0;

// move a box onto a stack
var float = function(){
  var box = createBox();
  box.appendTo("body");

  // calculate the target grid position of the block
  var x = Math.floor((Math.random() * gridwidth));
  // calculate the vertical position on the stack
  var y = stacks[x]++;

  // calculate the absolute screen position to move the block to
  console.log( "goto x: " + x + " y: " + y);
  var posx = x * blockwidth;
  var posy = height - (y * blockheight) - blockheight; // stop above screen bottom

  // now move the block
  box.animate(
    {left: posx+"px", top: posy+"px"},
    { duration: 3000 }
  );
}

var createBox = function() {
  var content = createContent();
  var box = $('.origbox').clone();
  var startgridx = Math.floor((Math.random() * gridwidth));
  var startx = startgridx * blockwidth;
  var color = shadesOfBlue[Math.floor( Math.random() * shadesOfBlue.length)];

  box.attr('id','box_' + numEl++);
  box.removeClass( 'origbox');
  box.css( 'visibility', 'visible');
  box.css( 'left', startx + "px");
  box.css( 'top', -blockheight + "px");
  console.log( color);
  var txt = box.find(".txt");
  txt.text( content);
  txt.addClass( color);
  return box;
}

var createContent = function() {
  var byte = Math.floor(Math.random() * 256);
  var content = byte.toString(16).toUpperCase();
  if ( content.length == 1 ) content = "0" + content;
  return content;
}


$(document).ready(function() {

  // initialize stack
  for ( var i = 0; i < stacks.length; i++) {
    stacks[i] = 0;
  }

  console.log("May the floating begin!");

  float();
  setInterval( float, 600);
});
