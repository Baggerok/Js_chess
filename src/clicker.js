export function Clicker(ref){

    let chosenPiece = null;
    let captureSound = new Audio("chess_pieces/capture.mp3");
    let moveSound = new Audio("chess_pieces/move-self.mp3");

    function movePiece(){
        let toTile = event.currentTarget;
        
        const targetPiece = toTile.firstElementChild;

        if (chosenPiece !== toTile && (!targetPiece || chosenPiece.firstElementChild.className !== targetPiece.className)){
            console.log(`${chosenPiece.id} to ${toTile.id}`);
            // if tile is empty: ignore
            try{toTile.removeChild(toTile.firstElementChild);}catch(Exception){};
            toTile.appendChild(chosenPiece.firstElementChild);
            
            //sound :3
            if (targetPiece){
                captureSound.play();
            }
            else {
                moveSound.play();
            }
            
        }
        switchCursor(false);
        chosenPiece = null;
    }

    // logic holds on log exceptions :^| (pls fix in future)
    function choosePiece() {
        try {
            chosenPiece = event.currentTarget;
            console.log(`chose tile: ${(chosenPiece.id)} with ${chosenPiece.firstElementChild.textContent}`);
            switchCursor();
        }
        catch(Exception){
            chosenPiece = null;
            switchCursor(false);
        }
    }

    function switchCursor(pieceSelected = true){
        document.querySelectorAll("img").forEach(img => {
            img.style.cursor = pieceSelected? "default" : "pointer";
        });
        board.querySelectorAll("div").forEach(img => {
            img.style.cursor = pieceSelected? "pointer" : "default";
        });
    }

    function handleClick(){
        if (chosenPiece != null) {
            movePiece();
        }
        else{
            choosePiece()
        }
    }
    return {handleClick};
}