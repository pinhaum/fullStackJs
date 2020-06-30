class Spaceship {
  constructor(name, type = "Descoberta") {
    this.name = name;
    this.type = type;
  }
}

let darwin = new Spaceship("Darwin");

let helmet = new Spaceship("Helmet", "Batalha");

console.log(darwin);
console.log(helmet);

///////////////////////////////////
class SpacialStation {
  constructor(name, platformsQuantity) {
    this.name = name;
    this.platformsQuantity = platformsQuantity;
  }
}

let yu = new SpacialStation("Yu", 30);

console.log(yu);
console.log(yu.name);
console.log(yu.platformsQuantity);

///////////////////////////////////
class SpaceshipWithSpeed {
  constructor(name) {
    this.name = name;
    this.velocity = 0;
  }

  speedUp(acceleration) {
    this.velocity += acceleration;
  }
}

let artemis = new SpaceshipWithSpeed("Artemis");

artemis.speedUp(10);
artemis.speedUp(15);

console.log(artemis);
