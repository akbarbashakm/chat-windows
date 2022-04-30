/* eslint-disable jsx-a11y/alt-text */
import React from "react";


const timeString = (time) => {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

export default class App extends React.Component {

  

  render() {
    return (
      <div className="stopwatch">
        <h1><span className="gold">STOPWATCH</span></h1>
        <div className="circle">
          <span className="time" id="display">00:00:00</span>
        </div>

        <div className="controls">
          <button className="buttonPlay">
            <img id="playButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/play-button_opkxmt.svg" />

            <img id="pauseButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/pause-button_pinhpy.svg" />
          </button>
          

          <button className="buttonReset">
            <img id="resetButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/reset-button_mdv6wf.svg" />
          </button>
        </div>
      </div>
    );
  }
}
