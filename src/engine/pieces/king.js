import OneStepPiece from "./oneStepPiece";

export default class King extends OneStepPiece {
    constructor(player) {
        super(player);
    }
}

King.prototype.directions = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
];
