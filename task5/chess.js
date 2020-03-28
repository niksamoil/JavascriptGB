'use strict';

let blackSquare = document.createElement('div'),
    whiteSquare = document.createElement('div'),
    chessA = document.querySelectorAll('.chess'),
    chess = document.querySelector('.chess'),
    chessGame = document.querySelectorAll('.black');



blackSquare.className = 'black';
whiteSquare.className = 'white';

chess.append(blackSquare);
// chess.append(whiteSquare);

// chess.insertAdjacentElement('beforeend', whiteSquare);



function game() {
    for (let i = 0; i < 64; i++) {

        if(chessA[i] == chess) {
            chess.insertBefore(whiteSquare, chessA[i+1]);
        } else {
            chess.insertBefore(whiteSquare, chessA[i]);
        }
    }
    console.log(chessA);
}


game();



