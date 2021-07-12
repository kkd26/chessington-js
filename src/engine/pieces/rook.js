import DirectionalPiece from "./directionalPiece";

export default class Rook extends DirectionalPiece {
    constructor(player) {
        super(player);
    }
}

Rook.prototype.directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
