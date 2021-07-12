import DirectionalPiece from "./directionalPiece";

export default class Bishop extends DirectionalPiece {
    constructor(player) {
        super(player);
    }
}

Bishop.prototype.directions = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
];

Bishop.prototype.letter = "b";