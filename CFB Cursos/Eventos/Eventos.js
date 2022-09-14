const btn = document.getElementById("btn");
const test = document.querySelector('.test')

function mudaCor(obj, cor) {
  obj.style.backgroundColor = cor;
}
function mudaCor2(obj, cor) {
  obj.style.backgroundColor = cor;
}

function mudaPos(obj) {
  obj.style.position = "absolute";
  obj.style.left = Math.random() * 500 + "px";
  obj.style.top = Math.random() * 500 + "px";
}

function hora() {
  let data = new Date();
  let hora = data.getHours();
  let text = "";
  if (hora < 12) {
    text = "Bom dia";
  } else if (hora > 12) {
    text = "Boa tarde";
  } else {
    text = "boa noite";
  }
  alert(`Olá, ${text}`);
}
function cor(obj, cor) {
  obj.style.color = cor;
}

function mudou() {
  btn.style.backgroundColor = "yellow";
  test.style.backgroundColor = "pink";

}
function mudou2() {
  btn.style.backgroundColor = "black"
  btn.style.color = "white";
  
}
