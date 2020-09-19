const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;
const asyncSum = (...args) => Promise.resolve(sum(...args));
const asyncSubtract = (...args) => Promise.resolve(subtract(...args));

test("async sum add numbers", async () => {
  const result = await asyncSum(1, 2);
  const expected = 3;

  expect(result).toBe(expected);
});

test("async subtract subtracts numbers", async () => {
  const result = await asyncSubtract(2, 1);
  const expected = 1;

  expect(result).toBe(expected);
});

test("sum add numbers", () => {
  const result = sum(1, 2);
  const expected = 3;

  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
