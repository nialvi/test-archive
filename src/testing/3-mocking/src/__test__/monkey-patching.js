const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("player1", "player2");
assert.strictEqual(winner, "player1");

utils.getWinner = originalGetWinner;
