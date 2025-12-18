export class Refery {
    constructor (tiles) {
        this.tiles = tiles;
        this.enableRules = true;
    }

    validMove(selectedPiece, destinationTile){
        selectedPiece = selectedPiece.firstElementChild().textContent;
        destCoords = destinationTile.id.split('-');
    }

    enableRules(){

    }
}