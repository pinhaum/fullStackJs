class Spaceship {
  static get DECELERATE() {
    return 0.17;
  }

  constructor(name, maxCrew) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.currentSpeed = 0;
  }

  speedUp(acceleration) {
    this.currentSpeed += acceleration * (1 - Spaceship.DECELERATE);
  }
}
