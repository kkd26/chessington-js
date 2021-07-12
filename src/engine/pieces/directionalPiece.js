import Piece from "./piece";
import Square from "../square";

export default class DirectionalPiece extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const { row, col } = currentSquare;

        const availableMoves = [];

        for (const direction of this.directions) {
            for (var i = 1; ; i++) {
                const newRow = row + i * direction[0];
                const newCol = col + i * direction[1];
                const newSquare = Square.at(newRow, newCol);

                if (board.isEmpty(newSquare)) {
                    availableMoves.push(newSquare);
                } else if (board.canBeTaken(newSquare)) {
                    availableMoves.push(newSquare);
                    break;
                } else {
                    break;
                }
            }
        }
        return availableMoves;
    }
}
