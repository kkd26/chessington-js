import Piece from "./piece";
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const { row, col } = currentSquare;

        const availableMoves = [];

        const directions = [
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
        ];

        for (const direction of directions) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];
            const newSquare = Square.at(newRow, newCol);

            if (board.hasSquare(newSquare)) availableMoves.push(newSquare);
        }
        return availableMoves;
    }
}
