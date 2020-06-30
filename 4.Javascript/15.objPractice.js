let spaceship = {
  speed: 0,
  speedUp: function (accelerate) {
    this.speed += accelerate;
  },
};

function registerSpaceship() {
  spaceship.name = prompt("Qual o nome da nave?");
  spaceship.type = prompt("Qual o tipo da nave?");
  spaceship.maxSpeed = Number(
    prompt(
      "Qual a velocidade máxima que esta nave atinge antes de se desfazer?"
    )
  );
}

function accelerate() {
  let acceleration = Number(prompt("Quantidade de aceleração"));
  spaceship.speedUp(acceleration);
  if (spaceship.speed > spaceship.maxSpeed)
    alert(
      "NESSA VELOCIDADE SUA NAVE VAI EXPLODIRR\nactual speed: " +
        spaceship.speed +
        `\nvelocidade maxima: ${spaceship.maxSpeed}`
    );
}

function stop() {
  alert(
    `Nome: ${spaceship.name}\nTipo: ${spaceship.type}\nVelocidade: ${spaceship.speed}\n Max Speed: ${spaceship.maxSpeed}`
  );
  spaceship.speed = 0;
}

function showMenu() {
  let option;
  do {
    option = confirm("Deseja acelerar?");
    switch (option) {
      case true:
        accelerate();
        break;
      case false:
        stop();
        break;
      default:
        alert("Invalid Option");
    }
  } while (option != false);
}

registerSpaceship();
showMenu();
