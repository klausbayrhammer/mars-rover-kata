import {Direction} from "./direction";

export enum Rotate {
    Left,
    Right
}

const DirectionAfterRotation = {
    [Direction.North]: {
        [Rotate.Left]: Direction.West,
        [Rotate.Right]: Direction.East
    },
    [Direction.West]: {
        [Rotate.Right]: Direction.North,
        [Rotate.Left]: Direction.South
    },
    [Direction.South]: {
        [Rotate.Right]: Direction.West,
        [Rotate.Left]: Direction.East
    },
    [Direction.East]: {
        [Rotate.Right]: Direction.South,
        [Rotate.Left]: Direction.North
    }
};

export default function computeDirection(currentDirection: Direction, command: Rotate): Direction {
    return DirectionAfterRotation[currentDirection][command];
}
