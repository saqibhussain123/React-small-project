import { useState } from "react"


const CountDown = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
        if (isRunning) return; // Prevent starting if already running
    
        setIsRunning(true);
        const id = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime >= 50) {
              clearInterval(id); // Stop the timer when it reaches 0
              setIsRunning(false);
              return 0;
            }
            return prevTime + 1;
          });
        }, 1000);
        setIntervalId(id); // Save the interval ID for cleanup
      };
      const pauseTimer = () => {
        clearInterval(intervalId);
        setIsRunning(false);
      };

      const resetTimer = () => {
        clearInterval(intervalId);
        setTime(0)
        setIsRunning(false);
      };

    
      
    return (
        <div>
            <h1>Countdown Timer</h1>
            <div>Time: {time}s</div>
            <div>
                <button onClick={startTimer} disabled={isRunning}>
                    Start
                </button>
                <button onClick={pauseTimer} disabled={!isRunning}>
                    Pause
                </button>
                <button onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default CountDown