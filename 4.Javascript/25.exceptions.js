class Spaceship {
  constructor(id) {
    this.id = id;
    this.shotsLeft = 5;
  }

  shoot() {
    if (this.shotsLeft > 0) {
      console.log("BANG!");
      this.shotsLeft -= 1;
    } else {
      throw new Error("Acabou a munição de " + this.id);
    }
  }

  reload() {
    this.shotsLeft = 5;
  }
}

let spaceship = new Spaceship(10);
try {
  spaceship.shoot();
  spaceship.shoot();
  spaceship.shoot();
  spaceship.shoot();
  spaceship.shoot();
  spaceship.shoot();
} catch (e) {
  console.log(e.message);
  spaceship.reload();
} finally {
  console.log("Arma deu doidera uhu9023ir");
}

console.log(spaceship);
