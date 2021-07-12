import Piece from "./piece";
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);

        const direction = this.player == Player.WHITE ? 1 : -1;
        const newSquare = Square.at(
            currentSquare.row + direction,
            currentSquare.col
        );

        return [newSquare];
    }
}
