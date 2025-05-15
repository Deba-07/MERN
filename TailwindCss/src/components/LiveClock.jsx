import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "3rem" }}>
        {time.toLocaleTimeString()}
      </h1>
      <button
        onClick={() => setIsRunning(!isRunning)}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          cursor: "pointer",
          background: isRunning ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px"
        }}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default LiveClock;
