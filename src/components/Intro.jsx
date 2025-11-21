import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    // بعد 5 ثواني هيوديك على الصفحة الرئيسية
    const timer = setTimeout(() => {
      navigate("/main"); // ممكن تغيرها لأي مسار تاني
    }, 3000);

    // تنظيف التايمر لما الصفحة تتقفل
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-white">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 animate-fadeIn">
        ❤️ Welcome My Love ❤️
      </h1>
      <p className="text-xl sm:text-2xl font-bold animate-pulse">
        Every moment with you is a beautiful story...
      </p>
    </div>
  );
}

export default Intro;
