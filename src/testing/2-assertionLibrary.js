const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result = sum(1, 2);
let expected = 3;

expect(result).toBe(expected);

result = subtract(2, 1);
expected = 1;

expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
