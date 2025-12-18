import {blackPieces, whitePieces, piecesNames} from "./chessPieces.js";
import {Clicker} from "./clicker.js";

const clicker = Clicker();

const board = document.getElementById("board");
let tiles = [];

function createBoard(){
    for (let i = 0; i < 8; i++) {
        tiles[i] = [];
        for (let j = 0; j < 8; j++) {
            tiles[i][j] = document.createElement("div");
             // change rows and check if tile is odd or even
            if ((i + j) % 2 === 0) {
                tiles[i][j].className = "black";
            }
            else {
                tiles[i][j].className = "white";
            }
            tiles[i][j].id = `${i}-${j}`;

            // give some style
            tiles[i][j].style.width = "60px";
            tiles[i][j].style.height = "60px";

            tiles[i][j].style.textAlign = "center";
            tiles[i][j].style.alignContent = "center";
            
            tiles[i][j].onclick = clicker.handleClick;
            // render ts
            board.appendChild(tiles[i][j]);
        }
    }
}

function populateBoard(){
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            // first rows
            if ((i == 0 || i == 7)){
                let piece = document.createElement("img");
                // extend white, black pieces logic for side delection 
                if (i == 7) {
                    piece.src = whitePieces[j];
                    piece.className = "whitePiece";
                }
                else {
                    piece.src = blackPieces[j];
                    piece.className = "blackPiece";
                }
                piece.textContent = piecesNames[j]
                tiles[i][j].appendChild(piece);
            }
            // second rows
            if (i == 1 || i == 6){
                let piece = document.createElement("img");
                // extend white, black pieces logic for side delection 
                if (i == 6 ) {
                    piece.src = whitePieces[8];
                    piece.className = "whitePiece";
                }
                else {
                    piece.src = blackPieces[8];
                    piece.className = "blackPiece";
                }
                piece.textContent = " pawn";
                tiles[i][j].appendChild(piece);
            }
        }
    }
}

createBoard();
populateBoard();