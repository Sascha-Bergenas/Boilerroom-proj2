import { useState, useEffect, useRef } from "react";

export default function useTimerLogic() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const startTimeRef = useRef(null);
  const elapsedRef = useRef(0);

  function startTimer() {
    startTimeRef.current = Date.now() - elapsedRef.current;
    setIsRunning(true);
    setHasStarted(true);
    console.log("Start:", new Date(startTimeRef.current).toLocaleString());
  }

  function pauseTimer() {
    elapsedRef.current = Date.now() - startTimeRef.current;
    setIsRunning(false);
  }

  function stopTimer() {
    setIsRunning(false);
    setTime(0);
    setHasStarted(false);
    console.log("Stop:", new Date(Date.now()).toLocaleString());
  }

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    time,
    startTimer,
    pauseTimer,
    stopTimer,
    isRunning,
    hasStarted,
  };
}
