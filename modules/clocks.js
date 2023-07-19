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
    clock.innerHTML =
      ' <svg class="outer" width="450" height="150"> \
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
    </svg> ';
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
    setInterval(this.updateClock, 10);
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
  };
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
    //this.updateClockWD();
    setInterval(this.updateClockWD, 10);
  }

  initClockWD() {
    const clock = document.createElement("span");
    clock.innerHTML =
      ' <svg class="outer" width="450" height="150"> \
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
        <rect class="day" x="230" y="30" width="70" height="15" rx="5" ry="5" /> \
        <text class="day-text" x="235" y="41" style="font-family: sans-serif; font-size: 12;" >Monday</text> \
    </svg> ';
    this.body = document.body.appendChild(clock);

    //this.clockEl = document.querySelector(".outer");
    this.getInfoWD();
    // requestAnimationFrame(this.updateClockWD);
  }
  updateClockWD = () => {
    let date;
    let day;
    let days;
    days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Friday",
    ];
    date = new Date().toLocaleDateString();
    day = new Date().getDay();
    this.updateClock();
    this.UI.date.textContent = date;
    this.UI.day.textContent = days[day - 1];
  };
}
class StopWatch extends Clock {
  constructor() {
    super();
    this.UI = {};
    this.body = document.body;
    this.counter = 0;
    this.interval = 0;
    // Binding the classes' 'this' as otherwise they would be a child of the event listener.
    this.updateClockSW = this.updateClockSW.bind(this);
    this.stopClockSW = this.stopClockSW.bind(this);
    this.initClockSW();
  }
  getInfoSW() {
    this.getInfo();
    let start;
    let stop;
    let clear;
    function clearPress() {
      console.log("Stopped...");
    }
    document
      .getElementsByClassName("start")[0]
      .addEventListener("click", this.updateClockSW);
    document
      .getElementsByClassName("stop")[0]
      .addEventListener("click", this.stopClockSW);
    document
      .getElementsByClassName("clear")[0]
      .addEventListener("click", clearPress);
  }

  initClockSW() {
    const clock = document.createElement("span");
    clock.innerHTML =
      ' <svg class="outer" width="470" height="150"> \
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
        <!-- Text for Buttons --> \
        <text class="start-text" x="413" y="51" font-size="18" style="fill: #fff; opacity: 1; user-select: none; -webkit-user-select: none;  -ms-user-select: none; ">Start</text>\
        <text class="stop-text" x="413" y="76" font-size="18" style="fill: #fff; opacity: 1; user-select: none; -webkit-user-select: none;  -ms-user-select: none; ">Stop</text> \
        <text class="clear-text" x="413" y="101" font-size="18" style="fill: #fff; opacity: 1; user-select: none; -webkit-user-select: none;  -ms-user-select: none; ">Clear</text> \
        <!-- Buttons --> \
        <rect class="start" x="410" y="35" rx="3" ry="3" width="44" height="20" /> \
        <rect class="stop" x="410" y="60" rx="3" ry="3" width="44" height="20" /> \
        <rect class="clear" x="410" y="85" rx="3" ry="3" width="44" height="20" /> \
        </svg> ';
    this.body = document.body.appendChild(clock);
    this.getInfoSW();
  }
  updateClockSW() {
    //console.log(this.UI);
    let localUI = this.UI;
    let internalCounter;
    let sec2, sec1, min2, min1, hour2, hour1, truncated, divided;
    let start = Date.now();
    let delta;
    let seconds;
    let minutes;
    let hours;
    let secDate, minDate, hourDate, end;
    let total;
    total = 0;
      
    localUI.hour1.textContent ? total += Number(localUI.hour1.textContent)*60*60*10: total = total,
    localUI.hour2.textContent ? total += Number(localUI.hour2.textContent)*60*60: total = total,
    localUI.min1.textContent ? total += Number(localUI.min1.textContent)*10*60: total = total,
    localUI.min2.textContent ? total += Number(localUI.min2.textContent)*60: total = total,
    localUI.sec1.textContent ? total += Number(localUI.sec1.textContent)*10: total = total,
    localUI.sec2.textContent ? total += Number(localUI.sec2.textContent): total = total;
    total = total*1000; // As they're in seconds, we need it in milliseconds.
    console.log(total);
    this.interval = setInterval(function () {
      total ? delta = Date.now() + total - start : delta = Date.now() - start;
      seconds = Math.floor(delta / 1000); // In seconds.
      sec2 = String(seconds).slice(-1);
      if (seconds > 10) {
        // if (!Number.isInteger(seconds/60)) {
        secDate = new Date(delta);
        sec1 = secDate.getSeconds();
        sec1 = String(sec1);
        sec1 = sec1.substring(sec1.length - 1, sec1.length - 2);
        if (sec1 === "") {
          sec1 = "0";
        }
        /* sec1 = (seconds/60);  
        sec1 = String(seconds);
        sec1 = sec1.split(".")[1];
        sec1 = "0."+sec1;
        sec1 = parseFloat(sec1); 
        sec1 = sec1*60;
        sec1 = String(sec1);
        sec1 = sec1.substring(sec1.length-2, sec1.length-1 ); */
        localUI.sec1.textContent = sec1;
      }
      if (seconds >= 60) {
        minDate = new Date(delta);
        minutes = minDate.getUTCMinutes();
        minutes = String(minutes);
        min2 = minutes.slice(-1);
        min1 = minutes.substring(minutes.length - 2, minutes.length - 1);
        /* Deprectated
        minutes = Math.floor(seconds/60);
        minutes = "00"+String(minutes);
        min2 = minutes.slice(-1);
        min1 = minutes.substring(minutes.length-2, minutes.length-1);
        */
        if (min1 === "") {
          min1 = "0";
        }
        localUI.min2.textContent = min2;
        localUI.min1.textContent = min1;
      }
      if (seconds >= 3600) {
        hourDate = new Date(delta);
        hours = hourDate.getUTCHours();
        hours = String(hours);
        hour2 = hours.slice(-1);
        hour1 = hours.substring(hours.length - 2, minutes.length - 1);
        if (hour1 === "") {
          hour1 = "0";
        }
        localUI.hour2.textContent = hour2;
        localUI.hour1.textContent = hour1;
      }
      
      
      localUI.sec2.textContent = sec2;
      

      /* if (this.counter) {
        0 is undefined as is falsy.  this.counter += 1;
        internalCounter = String(this.counter); 
        // Getting correct values.
        /*
        if (internalCounter > 60) {
          if (internalCounter/60 < 60) {
            divided = internalCounter / 60;
            truncated = Math.trunc(divided); // Removing decimals after converting to minutes.
            // Initialising variables for minutes.
            hour2 = truncated.splice(-1);
            hour1 = truncated.splice(-2);
          } 
        }
        // Initialising variables for seconds.
        sec2 = internalCounter.slice(-1);
        if (internalCounter > 360) {
          truncated =  internalCounter / 60;
          truncated = Math.floor(truncated);

        }
        
        sec1 = internalCounter.slice(-2);
  
        localUI.sec2.textContent = sec2;
      } else {
        this.counter = 1;
        internalCounter = String(this.counter);
        localUI.sec2.textContent = internalCounter;
      } Deprecated */
    }, 10);
    
    
  }
  stopClockSW() {
    clearInterval(this.interval);
  }
}

export { pingFunc, Clock, ClockWithDate, StopWatch }; // Exporting classes and functions.
