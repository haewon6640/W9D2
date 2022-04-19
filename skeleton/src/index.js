const View = require('./ttt-view')// require appropriate file
const Game = require('./../ttt_node/game')

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let figure = document.querySelector(".ttt");
  let gameView = new View(new Game(),figure)
});
