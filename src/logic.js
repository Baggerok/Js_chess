import {blackPieces, whitePieces, piecesNames} from "./chessPieces.js";
import {Clicker} from "./clicker.js";

const clicker = Clicker();

const board = document.getElementById("board");
let tiles = [];

function createBoard(){
    for (let i = 0; i < 64; i++) {
        tiles[i] = document.createElement("div");
        // change rows and check if tile is odd or even
        if ((Math.floor(i / 8) + i % 8) % 2 === 0) {
            tiles[i].className = "black";
        }
        else {
            tiles[i].className = "white";
        }
        tiles[i].id = i.toString();

        // give some style
        tiles[i].style.width = "60px";
        tiles[i].style.height = "60px";

        tiles[i].style.textAlign = "center";
        tiles[i].style.alignContent = "center";
        
        tiles[i].onclick = clicker.handleClick;
        // render ts
        board.appendChild(tiles[i]);
    }
}

function populateBoard(){
    for (let i = 0; i < tiles.length; i++) {
        let currentTile = tiles[i];

        // first rows
        if ((Math.floor(i / 8)) == 0 || (Math.floor(i / 8)) == (tiles.length / 8) - 1){
            for (let j = 0; j < 8; j++) {
                let piece = document.createElement("img");
                // extend white, black pieces logic for side delection 
                if (i >= 32) {
                    piece.src = whitePieces[j];
                    piece.className = "whitePiece";
                }
                else {
                    piece.src = blackPieces[j];
                    piece.className = "blackPiece";
                }
                piece.textContent = piecesNames[j]
                tiles[i+j].appendChild(piece);
            }
            i += 7;
        }
        // second rows
        if ((Math.floor(i / 8)) == 1 || (Math.floor(i / 8)) == (tiles.length / 8) - 2){
            let piece = document.createElement("img");
            // extend white, black pieces logic for side delection 
            if (i >= 32) {
                piece.src = whitePieces[8];
                piece.className = "whitePiece";
            }
            else {
                piece.src = blackPieces[8];
                piece.className = "blackPiece";
            }
            piece.textContent = " pawn";
            currentTile.appendChild(piece);
        }
    }
}

createBoard();
populateBoard();