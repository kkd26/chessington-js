import Player from "../player";

export default class Piece {
    constructor(player) {
        this.player = player;
        this.lastMoved = undefined;
        this.numberOfMoves = 0;
    }

    getAvailableMoves(board) {
        throw new Error(
            "This method must be implemented, and return a list of available moves"
        );
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    getLetter() {
        throw new Error(
            "This method must be implemented, and return a list of available moves"
        );
    }

    getName() {
        const letter = this.letter;
        if (this.player === Player.WHITE) return letter.toUpperCase();
        return letter;
    }
}
