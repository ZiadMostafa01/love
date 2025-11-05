import { useEffect, useState } from "react";

function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // مكان عشوائي في العرض
        size: Math.random() * 30 + 10, // حجم عشوائي
        duration: Math.random() * 3 + 2, // مدة الطلعة
      };
      setHearts((prev) => [...prev, newHeart]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute z-0 inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-pink-500"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `floatUp ${heart.duration}s linear forwards`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
