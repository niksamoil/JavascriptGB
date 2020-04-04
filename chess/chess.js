'use strict';

let blackSquare = document.createElement('div'),
    whiteSquare = document.createElement('div'),
    chessA = document.querySelectorAll('.chess'),
    chess = document.querySelector('#chess'),
    squareSelectRook = document.querySelector('.chess .square:nth-child(1)'),
    chessGame = document.querySelectorAll('.black');



blackSquare.className = 'black';
whiteSquare.className = 'white';



console.log(squareSelectRook);


let chessFigures = {
    bishop: 'figures/chess-bishop-solid.svg',
    king:  './figures/chess-king-solid.svg',
    knight: './figures/chess-knight-solid.svg',
    pawn: './figures/chess-pawn-solid.svg',
    rook: './figures/chess-rook-solid.svg',
    queen: './figures/crown-solid.svg'
};


function game(extraClass, fig) {
    let  chess = document.querySelector('.chess'),
        imgR = document.createElement('img'),
        imgB = document.createElement('img'),
        imgK = document.createElement('img'),
        imgP = document.createElement('img'),
        imgKn = document.createElement('img'),
        imgQ = document.createElement('img'),
        square = document.createElement('div'),
        squareSelectRook = document.querySelector('.chess .square:nth-child(1)'),
        imgRook = document.querySelector('.rook');
       


    imgR.classList.add('rook');
    imgR.src = chessFigures.rook;

    square.addEventListener('click', function(){
        square.style.background = 'red';
    });

    console.log(squareSelectRook);
       
    square.classList.add("square");

    if (extraClass) square.classList.add(extraClass);  


    chess.append(square);
}




for (let i = 0; i < 64; i++) {

    let extraClass = parseInt((i / 8) + i) % 2 == 0 ? 'white' : 'black'; 

    game(extraClass);
}




