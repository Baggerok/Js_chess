export function Clicker(){
    let chosenPiece = null;

    function movePiece(){
        let toTile = event.currentTarget;
        const targetPiece = toTile.firstElementChild;

        if (chosenPiece !== toTile && (!targetPiece || chosenPiece.firstElementChild.className !== targetPiece.className)){
            console.log(`${chosenPiece.id} to ${toTile.id}`);
            // if tile is empty: ignore
            try{toTile.removeChild(toTile.firstElementChild);}catch(Exception){};
            
            toTile.appendChild(chosenPiece.firstElementChild);
        }
        chosenPiece = null;
    }

    // logic holds on log exceptions :^| (pls fix in future)
    function choosePiece() {
        try {
            chosenPiece = event.currentTarget;
            console.log(`chose tile: ${chosenPiece.id} with ${chosenPiece.firstElementChild.textContent}`);
        }
        catch(Exception){
            chosenPiece = null;
        }
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