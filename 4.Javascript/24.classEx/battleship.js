class Battleship extends Spaceship {
  constructor(name, maxCrew, weapons) {
    super(name, maxCrew);
    this.weapons = weapons;
  }
}
