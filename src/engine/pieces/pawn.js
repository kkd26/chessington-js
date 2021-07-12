import Piece from "./piece";
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const { row, col } = currentSquare;

        const availableMoves = [];

        const isWhite = this.player == Player.WHITE;
        const isFirst = (isWhite && row == 1) || (!isWhite && row == 6);
        const direction = isWhite ? 1 : -1;

        const moveByOne = Square.at(row + direction, col);
        const moveByTwo = Square.at(row + 2 * direction, col);

        availableMoves.push(moveByOne);
        if (isFirst) availableMoves.push(moveByTwo);

        return availableMoves;
    }
}
