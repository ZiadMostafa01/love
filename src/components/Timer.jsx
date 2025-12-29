import { useEffect, useState } from "react";

const startDate = new Date("2025-09-09");

function getElapsedTime() {
  const now = new Date();
  const diff = now - startDate;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function ElapsedTimer() {
  const [time, setTime] = useState(getElapsedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getElapsedTime()); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 text-center text-[#fd3f5b] px-6 py-4 hover:scale-105 transition duration-300 rounded-xl shadow-2xl">
      <div className="font-bold text-2xl sm:text-3xl font-timer ">
        ❤️ We've been together for {time.days} days, {time.hours} hrs,{" "}
        {time.minutes} mins, and {time.seconds} secs ❤️
      </div>
    </div>
  );
}

export default ElapsedTimer;
