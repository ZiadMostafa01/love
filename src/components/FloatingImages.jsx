import { useEffect, useState } from "react";
import img1 from "../assets/images/gallery/7.jpg";
import img2 from "../assets/images/gallery/8.jpg";
import img3 from "../assets/images/gallery/9.jpg";
import img4 from "../assets/images/gallery/10.jpg";
import img5 from "../assets/images/gallery/11.jpg";
import img6 from "../assets/images/gallery/12.jpg";
import img7 from "../assets/images/gallery/13.jpg";

function FloatingImages() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [flyingImages, setFlyingImages] = useState([]);

  useEffect(() => {
    images.forEach((img, index) => {
      const newImage = {
        id: Date.now() + index,
        src: img,
        left: Math.random() * 80 + 10, // مكان عشوائي أفقي
        size: Math.random() * 50 + 50, // حجم عشوائي 50-100px
        duration: Math.random() * 3 + 2, // مدة الحركة 2-5 ثانية
        rotation: Math.random() * 720 - 360, // زاوية دوران عشوائية من -360 إلى 360
      };

      setFlyingImages((prev) => [...prev, newImage]);

      // حذف الصورة بعد انتهاء الحركة
      setTimeout(() => {
        setFlyingImages((prev) => prev.filter((f) => f.id !== newImage.id));
      }, newImage.duration * 1000);
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {flyingImages.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt=""
          className="rounded-xl"
          style={{
            position: "absolute",
            left: `${img.left}%`,
            bottom: 0,
            width: `${img.size}px`,
            height: "auto",
            animation: `flyRotate ${img.duration}s linear forwards`,
          }}
        />
      ))}

      {/* CSS animation */}
      <style jsx>{`
        @keyframes flyRotate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default FloatingImages;
