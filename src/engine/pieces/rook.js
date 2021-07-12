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

        for (var i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i != col) availableMoves.push(Square.at(row, i));
        }

        for (var i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i != row) availableMoves.push(Square.at(i, col));
        }

        return availableMoves;
    }
}
