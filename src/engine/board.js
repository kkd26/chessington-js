import Player from "./player";
import GameSettings from "./gameSettings";
import Square from "./square";
import King from "./pieces/king";
import Pawn from "./pieces/pawn";

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
        this.time = 0;
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error("The supplied piece is not on the board");
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            if(this.isEnPassantMove(fromSquare, toSquare)){
                const enPassantTakenSquare = Square.at(fromSquare.row, toSquare.col);
                this.setPiece(enPassantTakenSquare, undefined);
            }
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer =
                this.currentPlayer === Player.WHITE
                    ? Player.BLACK
                    : Player.WHITE;
            movingPiece.lastMoved = ++this.time;
            movingPiece.numberOfMoves++;
        }
    }

    isEnPassantMove(fromSquare, toSquare){
        const movingPiece = this.getPiece(fromSquare);
        return movingPiece instanceof Pawn && toSquare.col != fromSquare.col && !this.getPiece(toSquare);
    }

    isInBounds({ row, col }) {
        return (
            row >= 0 &&
            row < GameSettings.BOARD_SIZE &&
            col >= 0 &&
            col < GameSettings.BOARD_SIZE
        );
    }

    isEmpty(square) {
        return this.isInBounds(square) && this.getPiece(square) === undefined;
    }

    canBeTaken(square) {
        if (!this.isInBounds(square) || this.isEmpty(square)) return false;

        const piece = this.getPiece(square);

        if (piece instanceof King) return false;

        return piece.player !== this.currentPlayer;
    }
}
