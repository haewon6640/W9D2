const Game = require ("./../ttt_node/game")
class View {
  constructor(game, el) {
    this.setupBoard(el);
    this.game = game;
    this.bindEvents();
  }

  setupBoard(el) {
    const board = document.createElement("ul");
    board.setAttribute('id','grid')
    // board.style.display = "flex";
    board.style.width = "600px";
    board.style.height = "600px"; 
    board.style.padding = "0"; 
    // board.style.flexWrap = "wrap";
    board.style.display = "grid";

    board.style.gridTemplateRows = "200px 200px 200px";
    board.style.gridTemplateColumns = "200px 200px 200px";
    
    let newContent;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        newContent = document.createElement("LI");
        newContent.dataset.position = [i,j];
        newContent.style.display = "flex";
        newContent.style.justifyContent = "center";
        newContent.style.alignItems = "center";
        newContent.style.border = "2px solid black";

        newContent.style.background = "gray"
        board.appendChild(newContent);
      }
    }
    board.addEventListener("mouseover",(event) => {
      if (event.target.classList.contains("marked")) {
        return;
      }
      event.target.style.background = "yellow";
    })
    board.addEventListener("mouseout",(event) => {
      if (event.target.classList.contains("marked")) {
        return;
      }
      event.target.style.background = "gray";
    })

    el.appendChild(board);
  }
  
  bindEvents() {
    document.addEventListener("click", (event)=>{
      if (event.target.classList.contains("marked")) {
        alert("Bad move!");
      }
      this.handleClick(event);
    })
  }

  handleClick(e) {
    this.makeMove(e.target);
  }

  makeMove(square) {
    let position = square.dataset.position.split(",")
    
    this.game.playMove(position);

    square.style.backgroundColor = "white";
    square.textContent = this.game.currentPlayer
    square.style.fontSize = "100px";
    square.classList.add("marked")
    if (this.game.isOver()) {
      if (this.game.winner()) {
        alert(`${this.game.currentPlayer} has won the game!`)
      } else {
        alert("Tied!");
      }
    }
  }

}

module.exports = View;
