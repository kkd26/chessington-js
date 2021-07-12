import Piece from "./piece";
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const { row, col } = currentSquare;

        const availableMoves = [];

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        for (const direction of directions) {
            for (var i = 1; ; i++) {
                const newRow = row + i * direction[0];
                const newCol = col + i * direction[1];
                const newSquare = Square.at(newRow, newCol);

                if (board.isEmpty(newSquare)) {
                    availableMoves.push(newSquare);
                } else {
                    break;
                }
            }
        }
        return availableMoves;
    }
}
