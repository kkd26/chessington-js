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

        if (board.isEmpty(moveByOne)) {
            availableMoves.push(moveByOne);
            if (isFirst && board.isEmpty(moveByTwo))
                availableMoves.push(moveByTwo);
        }

        for (var colOffset of [-1, 1]) {
            const takingSquare = Square.at(row + direction, col + colOffset);
            if (board.canBeTaken(takingSquare)) {
                availableMoves.push(takingSquare);
            }

            const enPassantSquare = Square.at(row, col + colOffset);
            if (board.canBeTaken(enPassantSquare)) {
                const enPassantPiece = board.getPiece(enPassantSquare);
                if (
                    enPassantPiece instanceof Pawn &&
                    enPassantPiece.lastMoved === board.time &&
                    enPassantPiece.numberOfMoves === 1
                ) {
                    availableMoves.push(takingSquare);
                }
            } 
        }

        return availableMoves;
    }
}
