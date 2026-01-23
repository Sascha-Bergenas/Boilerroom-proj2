import useTimerLogic from "./timerLogic";
import Button from "../../ui/Button";
import "./Timer.css";

export default function Timer() {
  const { time, startTimer, pauseTimer, stopTimer, isRunning, hasStarted } =
    useTimerLogic();

  function calcTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const hundredths = Math.floor((time % 1000) / 10);

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedHundredths = hundredths < 10 ? "0" + hundredths : hundredths;

    return `${formattedMinutes}:${formattedSeconds}:${formattedHundredths}`;
  }

  return (
    <div className="timer-fill">
      <div className="stopwatch">
        <div className="ring" style={{ "--p": (time % 60000) / 60000 }}>
          <div className="ticks" />
          <div className="ring-inner">
            <div className="time-text">
              {formattedMinutes}:{formattedSeconds}
              <span className="milliseconds">:{formattedHundredths}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="timer-buttons">
        <Button
          onClick={startTimer}
          disabled={isRunning}
          text="Start"
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
