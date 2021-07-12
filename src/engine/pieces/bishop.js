import Piece from "./piece";
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const { row, col } = currentSquare;

        const availableMoves = [];

        const directions = [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
        ];

        for (const direction of directions) {
            for (var i = 1; i < GameSettings.BOARD_SIZE; i++) {
                const newRow = row + i * direction[0];
                const newCol = col + i * direction[1];
                const newSquare = Square.at(newRow, newCol);

                if (board.isInBounds(newSquare)) availableMoves.push(newSquare);
            }
        }
        return availableMoves;
    }
}
