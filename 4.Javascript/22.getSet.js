class TransportSpaceship {
  constructor(name) {
    this.name = name;
    this.currentSpeed = 0;
  }

  set speed(newSpeed) {
    if (newSpeed > 120) {
      this.currentSpeed = 120;
    } else {
      this.currentSpeed = newSpeed;
    }
  }
}

let transport = new TransportSpaceship("Dagmar");

transport.speed = 130;
console.log(transport);

class ResourceProcessStation {
  constructor(name, monthlyProcessedLoad) {
    this.name = name;
    this.monthlyProcessedLoad = monthlyProcessedLoad;
  }

  get weeklyProcessedLoad() {
    return this.monthlyProcessedLoad / 4;
  }
}

let resource = new ResourceProcessStation("Dogo", 200);

console.log(resource.weeklyProcessedLoad);

////////////////////////////////////
class ResourceStation {
  constructor(name, monthlyProcessing) {
    this.name = name;
    this.monthlyProcessing = monthlyProcessing;
  }

  static calculateProcessInHours(monthlyProcessing, hours) {
    return (monthlyProcessing / 720) * hours;
  }
}

let totalRes = ResourceStation.calculateProcessInHours(600, 6);

console.log(totalRes);

let processor = new ResourceStation("station", 2000);
let totalProcessed = ResourceStation.calculateProcessInHours(
  processor.monthlyProcessing,
  10
);

console.log(totalProcessed);
