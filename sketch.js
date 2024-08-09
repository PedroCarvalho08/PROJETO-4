let palavra

function setup() {
  createCanvas(600, 600);
  palavra = verduras();
}
function draw() {
  repolho ();
  beterraba ();
  verduras ();
}

function repolho() {
  background("#FF00B7");
  fill ("black");
  textSize(70);
  textAlign(CENTER,CENTER);
}

function beterraba () {
  let maximo = width
  let minimo = 0 ;
  let quantidade = map(mouseX, 0, width , 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300, 300);
}

function verduras () {  
  let palavras = ["Avakin Life","seja gayyy <3", "ninguem te gosta", "pedro", "nanom"]
 return random (palavras);
}
