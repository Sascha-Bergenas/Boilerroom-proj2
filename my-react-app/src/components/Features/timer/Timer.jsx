// Component display timer UI and buttons
//Use the timer logic hook to control stopwatch

import useTimerLogic from "./timerLogic";
import Button from "../../ui/Button";
import "./Timer.css";

export default function Timer() {
  //get timer state and control functions from custom hook
  const { time, startTimer, pauseTimer, stopTimer, isRunning, hasStarted } =
    useTimerLogic();

  //Converts ms to formatted time values to display on page
  function calcTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return {
      formattedHours: hours.toString().padStart(2, "0"),
      formattedMinutes: minutes.toString().padStart(2, "0"),
      formattedSeconds: seconds.toString().padStart(2, "0"),
    };
  }

  //format current time value for rendering
  const { formattedHours, formattedMinutes, formattedSeconds } = calcTime(time);

  return (
    <div className="timer-fill">
      <div className="stopwatch">
        {/* Progress ring uses css variable to show time progress */}
        <div className="ring" style={{ "--p": (time % 60000) / 60000 }}>
          <div className="ticks" />
          <div className="ring-inner">
            <div className="time-text">
              {formattedHours}:{formattedMinutes}:{formattedSeconds}
            </div>
          </div>
        </div>
      </div>

      {/* Timer control buttons */}
      <div className="timer-buttons">
        <Button
          onClick={startTimer}
          disabled={isRunning}
          text="Start"
          l
          variant="primary"
        />
        <Button
          onClick={pauseTimer}
          disabled={!isRunning}
          text="Pause"
          variant="secondary"
        />
        <Button
          onClick={stopTimer}
          disabled={!hasStarted}
          text="Stop"
          variant="primary"
        />
      </div>
    </div>
  );
}
