class Spaceship {
  constructor(name, maxCrew, maxSpeed) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = 0;
  }

  speedUp(acceleration) {
    this.currentSpeed += acceleration;
    if (this.currentSpeed > this.maxSpeed)
      alert("AE IRMAO, VAI DAR MERDA ISSO AE!");
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, maxCrew, maxSpeed, maxLoadWeight) {
    super(name, maxCrew, maxSpeed);
    this.maxLoadWeight = maxLoadWeight;
  }

  speedUp(acceleration) {
    acceleration /= 2;
    alert("incrementando a velocidade pela metade");
    super.speedUp(acceleration);
  }
}

let transport = new TransportSpaceship("Transporter", 10, 100, 400);

console.log(transport);

transport.speedUp(210);

console.log(transport);
