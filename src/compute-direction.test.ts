import computeDirection, {Rotate} from "./compute-direction";
import {Direction} from "./direction";

describe('compute-direction.ts', function () {
    it.each([
        [Direction.North, Rotate.Left, Direction.West],
        [Direction.North, Rotate.Right, Direction.East],
        [Direction.West, Rotate.Right, Direction.North]
    ])('when facing %s and executing %s it should face towards %s', (initialDirection, command, expectedDirection) => {
        expect(computeDirection(initialDirection, command)).toEqual(expectedDirection)
    })
});
