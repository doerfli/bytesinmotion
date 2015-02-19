// class names for blue text
var shadesOfBlue = [ "signblue" , "bluespider", "alaskasky", "bluevelvet", "delft", "midnightblue", "royalblue4"];
// the number of the current element
var numEl = 0;
var numStacks = 30; // number of stacks to begin with
var minBlockWidth = 30;
  
$(document).ready(function() {
  
  var width = window.innerWidth;
  var height = window.innerHeight;

  // aspect ratio ~ 4:3
  var blockwidth = Math.floor( width / numStacks); // px 
  if ( blockwidth < minBlockWidth ) 
  {
    blockwidth = minBlockWidth;
    numStacks = Math.floor( width / blockwidth);
  }
  var blockheight = Math.floor( blockwidth / 4 * 3); // px 
  console.log( "blockwidth: " + blockwidth + " x " + blockheight);

  // grid size
  var gridwidth = Math.round(width / blockwidth) - 1; // no clipped block at right end
  var gridheight = Math.round(height / blockheight);
  console.log( "grid size - x: " + gridwidth + " y: " + gridheight);
  // stacks to place the blocks on
  var stacks = new Array( gridwidth);


  // initialize stack
  for ( var i = 0; i < stacks.length; i++) {
    stacks[i] = 0;
  }
  
  // move a box onto a stack
  var float = function(){
    var box = createBox();
    box.appendTo("body");

    // calculate the target grid position of the block
    var x = Math.floor((Math.random() * gridwidth));
    // calculate the vertical position on the stack
    var y = stacks[x]++;

    // calculate the absolute screen position to move the block to
    console.log( "float to gridx: " + x + " gridy: " + y);
    var posx = x * blockwidth;
    var posy = height - ((y + 1) * blockheight) - 10; // stop just above screen bottom

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

    box.removeClass( 'origbox').attr('id','box_' + numEl++);
    box.css( 'visibility', 'visible');
    box.css( 'top', -blockheight + "px").css( 'left', startx + "px");
    box.css( 'font-size', blockheight);
    // insert text and set class
    box.find(".txt").text( content).addClass( color);
    return box;
  }

  var createContent = function() {
    var byte = Math.floor(Math.random() * 256);
    var content = byte.toString(16).toUpperCase();
    if ( content.length == 1 ) content = "0" + content;
    return content;
  }
  
  console.log("May the floating begin!");

  float();
  setInterval( float, 600);

});
