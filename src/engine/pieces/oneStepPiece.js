import Piece from "./piece";
import Square from "../square";

export default class OneStepPiece extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const { row, col } = currentSquare;

        const availableMoves = [];

        for (const direction of this.directions) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];
            const newSquare = Square.at(newRow, newCol);

            if (board.isEmpty(newSquare) || board.canBeTaken(newSquare)) availableMoves.push(newSquare);
        }
        return availableMoves;
    }
}
