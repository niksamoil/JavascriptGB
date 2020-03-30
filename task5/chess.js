'use strict';

let blackSquare = document.createElement('div'),
    whiteSquare = document.createElement('div'),
    chessA = document.querySelectorAll('.chess'),
    chess = document.querySelector('.chess'),
    chessGame = document.querySelectorAll('.black');



blackSquare.className = 'black';
whiteSquare.className = 'white';



function game(extraClass) {
    let  chess = document.querySelector('.chess'),
        square = document.createElement('div');
        square.classList.add("square");

        if (extraClass) square.classList.add(extraClass);    

        chess.append(square);
}

for (let i = 0; i < 64; i++) {


    let extraCalss = parseInt((i / 8) + i) % 2 == 0 ? 'white' : 'black'; 

    game(extraCalss);
  }



