function pingFunc() {
    console.log("Ping! Online...");
}
class Clock {
    constructor() {
        this.UI = {}; 
        this.initClock();
        this.body = document.body;
    }
    // Begin setup.
    initClock() {
        // Making Clock
        const clock = document.createElement("span");
        clock.innerHTML = ' <svg class="outer" width="450" height="150"> \
        <!-- Hours --> \
        <rect x="25" y="25" rx="25" ry="25" width="400" height="100"/> \
        <rect class="inner" x="45" y="35" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits hour1" x="45" y="105" font-size="85">0</text> \
        <rect class="inner" x="100" y="35" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits hour2" x="100" y="105" font-size="85">0</text> \
        \
        <text class="colons" x="145" y="100" font-size="100">:</text> \
        <!-- Minutes --> \
        <rect class="inner" x="175" y="35" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits min1" x="175" y="105" font-size="85">0</text> \
        <rect class="inner" x="230" y="35" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits min2" x="230" y="105" font-size="85">0</text> \
         \
        <text class="colons" x="275" y="100" font-size="100">:</text> \
        <!-- Seconds --> \
        <rect class="inner" x="305" y="35" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits sec1" x="305" y="105" font-size="85">0</text> \
        <rect class="inner" x="360" y="35" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits sec2" x="360" y="105" font-size="85">0</text> \
    </svg> '
        this.body = document.body.appendChild(clock); // Creating personal instance of the clock for use within class (so we can edit and update).
        
        //this.clockEl = document.querySelector(".outer");  
        // Getting DOM for each digit. 
        this.UI.hour1 = this.body.querySelector(".hour1");
        this.UI.hour2 = this.body.querySelector(".hour2");

        this.UI.min1 = this.body.querySelector(".min1");
        this.UI.min2 = this.body.querySelector(".min2");

        this.UI.sec1 = this.body.querySelector(".sec1");
        this.UI.sec2 = this.body.querySelector("sec2");
        requestAnimationFrame(this.updateClock);
    }
    // Update Clock 
    // Getting element details.
    updateClock() {

    }
}

export { pingFunc, Clock };