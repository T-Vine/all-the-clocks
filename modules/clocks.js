function pingFunc() {
    console.log("Ping! Online...");
}
class Clock {
    constructor() {
        this.UI = {}; 
        this.body = document.body;
    }
    // Begin setup.
    initClock() {
        // Making Clock
        const clock = document.createElement("span");
        clock.innerHTML = ' <svg class="outer" width="450" height="150"> \
        <rect x="25" y="25" rx="25" ry="25" width="400" height="100"/> \
        <!-- Hours --> \
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
        this.getInfo();
        //requestAnimationFrame(this.updateClock());
    }
    // Get Info
    getInfo() {
        this.UI.hour1 = this.body.querySelector(".hour1");
        this.UI.hour2 = this.body.querySelector(".hour2");

        this.UI.min1 = this.body.querySelector(".min1");
        this.UI.min2 = this.body.querySelector(".min2");

        this.UI.sec1 = this.body.querySelector(".sec1");
        this.UI.sec2 = this.body.querySelector(".sec2");
        
    }
    // Update Clock.
    init() {
        this.initClock();
        this.getInfo();
        setInterval(this.updateClock,10);
    }
    updateClock = () => {
        let time;
        let timeArr;
        time = new Date().toLocaleTimeString();
        timeArr = time.split(":");
        this.UI.hour1.textContent = timeArr[0][0];
        this.UI.hour2.textContent = timeArr[0][1];

        this.UI.min1.textContent = timeArr[1][0];
        this.UI.min2.textContent = timeArr[1][1];
        
        this.UI.sec1.textContent = timeArr[2][0];
        this.UI.sec2.textContent = timeArr[2][1];
    }
}
class ClockWithDate extends Clock {
    constructor() {
        super();
        this.UI = {};
        this.body = document.body;
        this.initClockWD();
    }

    getInfoWD() {
        this.getInfo();
        this.UI.day = this.body.querySelector(".day-text");
        this.UI.date = this.body.querySelector(".date-text");
        this.updateClockWD();
        setInterval(this.updateClockWD,10);
    }

    initClockWD() {
        const clock = document.createElement("span");
        clock.innerHTML = ' <svg class="outer" width="450" height="150"> \
        <!-- Outer --> \
        <rect x="25" y="25" rx="25" ry="25" width="400" height="115"/> \
        <!-- Hours --> \
        <rect class="inner" x="45" y="50" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits hour1" x="45" y="120" font-size="85">0</text> \
        <rect class="inner" x="100" y="50" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits hour2" x="100" y="120" font-size="85">0</text> \
        \
        <text class="colons" x="145" y="115" font-size="100">:</text> \
        <!-- Minutes --> \
        <rect class="inner" x="175" y="50" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits min1" x="175" y="120" font-size="85">0</text> \
        <rect class="inner" x="230" y="50" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits min2" x="230" y="120" font-size="85">0</text> \
        \
        <text class="colons" x="275" y="115" font-size="100">:</text> \
        <!-- Seconds --> \
        <rect class="inner" x="305" y="50" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits sec1" x="305" y="120" font-size="85">0</text> \
        <rect class="inner" x="360" y="50" rx="8" ry="8" width="43.75" height="80" /> \
        <text class="digits sec2" x="360" y="120" font-size="85">0</text> \
        <!-- Date --> \
        <rect class="date" x="310" y="30" width="80" height="15" rx="5" ry="5" /> \
        <text class="date-text" x="312" y="43">00/00/0000</text> \
        <!-- Day --> \
        <rect class="day" x="240" y="30" width="60" height="15" rx="5" ry="5" /> \
        <text class="day-text" x="245" y="41" style="font-family: sans-serif; font-size: 12;" >Monday</text> \
    </svg> '
        this.body = document.body.appendChild(clock); 
        
        //this.clockEl = document.querySelector(".outer");  
        this.getInfoWD()
        // requestAnimationFrame(this.updateClockWD);
    }
    updateClockWD = () => {
        let date;
        let day;
        let days;
        days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Friday"];
        date = new Date().toLocaleDateString();
        day = new Date().getDay();
        this.updateClock();
        this.UI.date.textContent = date;
        this.UI.day.textContent = days[day-1];
    }
}
class StopWatch extends Clock {
    constructor() {
        super();
        this.UI = {};
        this.body = document.body;
        this.initClockSW();
    }

    getInfoSW() {
        
    }

    initClockSW() {
        const clock = document.createElement("span");
        clock.innerHTML = ' <svg class="outer" width="470" height="150"> \
        <rect x="25" y="25" rx="25" ry="25" width="440" height="100"/> \
        <!-- Hours --> \
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
        <!-- Buttons --> \
        <rect class="start" x="410" y="35" rx="3" ry="3" width="44" height="20" /> \
        <rect class="stop" x="410" y="85" rx="3" ry="3" width="44" height="20" /> \
        <rect class="clear" x="410" y="60" rx="3" ry="3" width="44" height="20" /> \
        <!-- Text for Buttons --> \
        <text class="start-text" x="413" y="51" font-size="18" style="fill: #fff; opacity: 0.7;">Start</text>\
        <text class="stop-text" x="413" y="76" font-size="18" style="fill: #fff; opacity: 0.7;">Stop</text> \
        <text class="clear-text" x="413" y="101" font-size="18" style="fill: #fff; opacity: 0.7;">Clear</text> \
        </svg> '
        this.body = document.body.appendChild(clock);
    }
}

export { pingFunc, Clock, ClockWithDate, StopWatch }; // Exporting classes and functions.