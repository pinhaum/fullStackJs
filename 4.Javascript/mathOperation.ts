abstract class MathOperation {
  abstract calculate(x: number, y: number)
}

abstract class add extends MathOperation {
  calculate(x: number, y: number) {
    return x + y;
  }
}

abstract class subtract extends MathOperation {
  calculate(x: number, y: number) {
    return x - y;
  }
}