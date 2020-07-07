const spaceship = {
  name: "Jericoh",
  currentBateryCharge: 50,
  consumptionPerKms: 0.00008,
};

const updateBateryCharge = function (chargeConsumed) {
  return new Promise((resolve, reject) => {
    spaceship.currentBateryCharge -= chargeConsumed;
    if (spaceship.currentBateryCharge > 0) {
      resolve(spaceship.currentBateryCharge);
    } else {
      reject("Bateria esgotada! Nave será desativad...");
    }
  });
};

const calculateBatteryConsumption = function (velocity, seconds) {
  return new Promise((resolve, reject) => {
    if (spaceship.consumptionPerKms <= 0 || velocity <= 0) {
      reject("Nave está parada");
    } else {
      let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds;
      resolve(chargeConsumed);
    }
  });
};

calculateBatteryConsumption(90, 300)
  .then((chargeConsumed) => {
    return updateBateryCharge(chargeConsumed);
  })
  .then((newCharge) => {
    console.log(`Carga atual: ${newCharge}`);
  })
  .catch((err) => {
    console.log(err);
  });
