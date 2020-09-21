const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("return winner", () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("player1", "player2");

  expect(winner).toBe("player1");
  expect(utils.getWinner.mock.calls).toEqual([
    ["player1", "player2"],
    ["player1", "player2"],
  ]);

  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, "player1", "player2");
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, "player1", "player2");

  utils.getWinner = originalGetWinner;
});
