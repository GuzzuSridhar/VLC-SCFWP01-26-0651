import { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // the return is used as a  cleanup function
    // return () => {
    //   clearInterval(timerid);
    // };
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}

export default LiveClock;
