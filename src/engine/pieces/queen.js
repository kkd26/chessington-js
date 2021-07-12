import DirectionalPiece from "./directionalPiece";

export default class Queen extends DirectionalPiece {
    constructor(player) {
        super(player);
    }
}

Queen.prototype.directions = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
];
