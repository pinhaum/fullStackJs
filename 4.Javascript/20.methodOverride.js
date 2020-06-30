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

  stop() {
    this.currentSpeed = 0;
  }
}

class TransportSpaceship extends Spaceship {
  speedUp() {
    alert("naves de transporte só aumenta a speed em 1 km/s espacial");
    this.currentSpeed += 1;
  }
}

let transport = new TransportSpaceship("Transporter", 30, 100);

transport.speedUp();
console.log(transport);

transport.stop();
console.log(transport);
