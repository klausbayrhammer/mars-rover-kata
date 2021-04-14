import computeDirection, {Rotate} from "./compute-direction";
import computeNewPosition, {Move} from "./compute-new-position";
import {Direction} from "./direction";

export class MarsRover {
    constructor(private x: number, private y: number, private direction: Direction) {
    }

    execute(command: Move | Rotate) {
        if(command === Rotate.Left || command === Rotate.Right) {
            this.direction = computeDirection(this.direction, command);
        } else {
            const {x, y} = computeNewPosition(this.x, this.y, this.direction, command);
            this.x = x;
            this.y = y;
        }
    }

    currentState() {
        return {x: this.x, y: this.y, direction: this.direction}
    }
}
