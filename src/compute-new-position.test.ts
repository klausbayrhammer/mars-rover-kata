import computeNewPosition, {Move} from "./compute-new-position";
import {Direction} from "./direction";

describe('compute-new-position.ts', function () {
    it.each([
     [Direction.North, Move.Forward, 0, 1],
     [Direction.North, Move.Backward, 0, -1],
     [Direction.East, Move.Forward, 1, 0],
    ])('computes the next position facing %s moving %s', function (direction, command, x, y) {
        expect(computeNewPosition(0, 0, direction, command)).toEqual({x, y})
    });
});
