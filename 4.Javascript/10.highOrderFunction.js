function doubleVelocity(velocity, printer) {
  console.log("double speed");
  let newVelocity = velocity * 2;
  printer(newVelocity);
  return newVelocity;
}

let printVelocity = (velocity) => {
  console.log(`nova velocidade: ${velocity}`);
};

let newVelocity = doubleVelocity(60, printVelocity);

console.log(newVelocity);
