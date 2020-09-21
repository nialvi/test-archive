const thumbWar = require("../thumb-war");
const utilsMock = require("../utils");

jest.mock("../utils");

test("return winner", () => {
  const winner = thumbWar("player1", "player2");

  expect(winner).toBe("player1");
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ["player1", "player2"],
    ["player1", "player2"],
  ]);

  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2);
  expect(utilsMock.getWinner).toHaveBeenNthCalledWith(1, "player1", "player2");
  expect(utilsMock.getWinner).toHaveBeenNthCalledWith(2, "player1", "player2");

  utilsMock.getWinner.mockReset();
});
