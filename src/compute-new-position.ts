import {Direction} from "./direction";

enum Operation {
    xPositive,
    xNegative,
    yPositive,
    yNegative
}

export enum Move {
    Forward = "F",
    Backward = "B",
}

const PositionOperation = {
    [Direction.North]: {
        [Move.Forward]: Operation.yPositive,
        [Move.Backward]: Operation.yNegative,
    },
    [Direction.East]: {
        [Move.Forward]: Operation.xPositive,
        [Move.Backward]: Operation.xNegative,
    },
    [Direction.South]: {
        [Move.Forward]: Operation.yNegative,
        [Move.Backward]: Operation.yPositive,
    },
    [Direction.West]: {
        [Move.Forward]: Operation.xNegative,
        [Move.Backward]: Operation.xPositive,
    },
}

export default function computeNewPosition(x: number, y: number, direction: Direction, command: Move): { x: number, y: number } {
    const operation = PositionOperation[direction][command];
    switch (operation) {
        case Operation.xPositive:
            return {x: x+1, y};
        case Operation.xNegative:
            return {x: x-1, y};
        case Operation.yPositive:
            return {x, y: y+1};
        case Operation.yNegative:
            return {x, y: y-1};
    }
}
