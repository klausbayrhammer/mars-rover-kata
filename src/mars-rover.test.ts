import {MarsRover} from "./mars-rover";
import computeDirection, {Rotate} from './compute-direction';
import computeNewPosition, {Move} from './compute-new-position';
import {mocked} from "ts-jest";
import {Direction} from "./direction";

jest.mock('./compute-direction');
jest.mock('./compute-new-position');


describe('mars-rover.ts', function () {
    const mockedComputeDirection = mocked(computeDirection);
    const mockedComputeNewPosition = mocked(computeNewPosition);

    beforeEach(function () {
        jest.resetAllMocks();
    });

    describe('initialization', function () {
        it('initializes the mars rover with a given position', function () {
            const marsRover = new MarsRover(0, 1, Direction.North);
            expect(marsRover.currentState()).toEqual({x: 0, y: 1, direction: Direction.North})
        });
    });

    describe('execute rotation commands', function () {
        it('delegates the computation of rotations', function () {
            const marsRover = new MarsRover(0, 0, Direction.North);
            mockedComputeDirection.mockReturnValue(Direction.South);

            marsRover.execute(Rotate.Left);

            expect(mockedComputeDirection).toHaveBeenCalledWith(Direction.North, Rotate.Left);
            expect(marsRover.currentState().direction).toEqual(Direction.South)
        });
        it('shouldnt delegate move commands to computeDirection', function () {
            const marsRover = new MarsRover(0, 0, Direction.North);
            mockedComputeNewPosition.mockReturnValue({x: 1, y: 1});

            marsRover.execute(Move.Forward);

            expect(mockedComputeDirection).not.toHaveBeenCalled();
        });
    });

    describe('executes move commands', function () {
        it('delegates the computation of rotations', function () {
            const marsRover = new MarsRover(0, 0, Direction.North);
            mockedComputeNewPosition.mockReturnValue({x: 1, y: 1});

            marsRover.execute(Move.Forward);

            expect(mockedComputeNewPosition).toHaveBeenCalledWith(0, 0, Direction.North, Move.Forward);
            expect(marsRover.currentState().x).toEqual(1)
            expect(marsRover.currentState().y).toEqual(1)
        });
    });

});
