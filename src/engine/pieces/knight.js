import OneStepPiece from "./oneStepPiece";

export default class Knight extends OneStepPiece {
    constructor(player) {
        super(player);
    }
}

Knight.prototype.directions = [
    [1, 2],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [2, 1],
    [-2, 1],
    [-2, -1],
    [2, -1],
];

Knight.prototype.letter = "n";
