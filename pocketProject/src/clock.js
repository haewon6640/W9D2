import {htmlGenerator} from "./warmup";
export class Clock {
    constructor() {
        this.clock = new Date();
    }
    printTime() {
        this.clock = new Date();
        return `${this.clock.getHours()}:${this.clock.getMinutes()}:${this.clock.getSeconds()}`;
    }
}

let clockElement = document.getElementById("clock");
let clock = new Clock();
setInterval(() => {
    htmlGenerator(clock.printTime(),clockElement);
}, 1000);
