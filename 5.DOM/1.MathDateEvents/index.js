console.log(Math.pow(5, 3));
console.log(Math.PI);
console.log(Math.sqrt(64));

let MyBirthday = new Date(1990, 04, 17); //mês começa no mês[0] = janeiro logo, 04 imprime o mês de maio
console.log(MyBirthday);
today = Date.now();
console.log(today);

/////////////////////////////////
function clickMe() {
  console.log("Fui clicado");
}

function focusMe() {
  console.log("FUi focado");
}

function blurMe() {
  console.log("FUi desfocado");
}

function changeMe() {
  console.log("fui alterado");
}

function overMe() {
  console.log("Mouse aqui");
}
