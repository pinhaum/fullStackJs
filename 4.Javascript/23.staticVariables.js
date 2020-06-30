class Spaceship {
  static get decelerate() {
    return 0.15;
  }

  constructor(name) {
    this.name = name;
    this.currentSpeed = 0;
  }

  speedUp(acceleration) {
    this.currentSpeed += acceleration * (1 - Spaceship.decelerate);
  }
}

let spaceship = new Spaceship("apolol");
spaceship.speedUp(100);
console.log(spaceship);
