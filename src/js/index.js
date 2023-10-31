//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter";


let hoursDos = 0;
let hours = 0;
let minutesDos = 0;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;

setInterval(() => {

    if (miliSeconds == 9) {
        miliSeconds = 0;
        seconds++;
    }

    if (seconds == 6) {
        miliSeconds = 0;
        seconds = 0;
        minutes++;
    }

    if (minutes == 9) {
        miliSeconds = 0;
        seconds = 0;
        minutes= 0;
        minutesDos++;
    }

    if (minutesDos == 6) {
        miliSeconds = 0;
        seconds = 0;
        minutes= 0;
        minutesDos= 0;
        hours++;
    }

    if (hours == 9) {
        miliSeconds = 0;
        seconds = 0;
        minutes= 0;
        minutesDos= 0;
        hours= 0;
        hoursDos++;
    }

    if (hoursDos == 2 && hours == 4) {
        miliSeconds = 0;
        seconds = 0;
        minutes= 0;
        minutesDos= 0;
        hours= 0;
        hoursDos= 0;
    }




    ReactDOM.render(
        <SecondsCounter miliSeconds={miliSeconds} seconds={seconds} minutes={minutes} minutesDos={minutesDos} hours={hours} hoursDos={hoursDos}/>,
        document.querySelector("#app")
    );

    miliSeconds++;

}, 1000);
