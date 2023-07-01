function pingFunc() {
    console.log("Ping! Online...");
}
class Clock {
    constructor(el) {
        this.clockEl = el;
        this.UI = {};
        // Begin setup. 
    }
    initClock() {
        this.UI.hour1 = this.clockEl.querySelector("#hour1");
        requestAnimationFrame(this.updateClock)
    }
    // Update Clock
    // Getting element details.
    updateClock() {
        
    }
}

export { pingFunc, Clock };