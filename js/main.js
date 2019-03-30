window.onload = function() {
  textToHex();
  setInterval(function() {
    let elementsToAnimate = document.getElementsByClassName("toAnimate");
    let x = Math.floor(Math.random() * elementsToAnimate.length);
    let el = elementsToAnimate[x];
    animate(el);
  }, 1000);
};

let text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

let toHex = function(letter) {
  return Number(letter.charCodeAt(0)).toString(16);
};

let createHexDiv = function(letter) {
  let letterHex = toHex(letter);
  let html = document.createElement("div");
  html.appendChild(document.createTextNode(letterHex));
  html.classList.add("byte", "toAnimate");
  html = setPastelColor(html);
  return html;
};

let setPastelColor = function(el) {
  let hue = Math.floor(Math.random() * 360);
  el.style.color = 'hsl(' + hue + ', 100%, 87.5%)';
  return el;
};

let textToHex = function() {
  for(let i = 0; i < text.length; i++) {
    let letter = text[i];
    let mainEl = document.getElementsByClassName("main")[0];
    mainEl.append(createHexDiv(letter));
  }
};

let animate = function(elToAnimate) {
  var animation = null;
  switch(Math.floor(Math.random() * 4)) {
    case 0:
      animation = "moveToTop";
      break;
    case 1:
      animation = "moveToBottom";
      break;
    case 2:
      animation = "moveToLeft";
      break;
    default:
      animation = "moveToRight";
      break;
  }
  elToAnimate.classList.add(animation);
  elToAnimate.classList.remove("toAnimate");
  // setTimeout(function() {
  //   elToAnimate.classList.add("hidden");
  // }, 5000);
};
