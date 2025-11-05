import { useState } from "react";
import img1 from "../assets/images/gallery/1.jpg";
import img2 from "../assets/images/gallery/2.jpg";
import img3 from "../assets/images/gallery/3.jpg";
import img4 from "../assets/images/gallery/4.jpg";
import img5 from "../assets/images/gallery/5.jpg";
import img6 from "../assets/images/gallery/6.jpg";
import img7 from "../assets/images/gallery/7.jpg";
import img8 from "../assets/images/gallery/8.jpg";
import img9 from "../assets/images/gallery/9.jpg";
import img10 from "../assets/images/gallery/10.jpg";
import img11 from "../assets/images/gallery/11.jpg";

function Gallery() {
  const images = [
    {
      src: img1,
    },

    {
      src: img2,
    },
        {
      src: img3,
    },

    {
      src: img4,
    },
    {
      src: img5,
    },
    {
      src: img6,
    },
    {
      src: img7,
    },
    {
      src: img8,
    },
    {
      src: img9,
    },
    {
      src: img10,
    },
    {
      src: img11,
    },
  ];

  const [open, setOpen] = useState(false); // حالة المودال
  const [index, setIndex] = useState(0); // الصورة اللي هتتفتح

  return (
    <div className="w-full text-center">
      <h2 className="text-2xl font-bold text-[#ff6b81] mb-4">📸 OUR GALLERY</h2>

      {/* grid الصور */}
      <div className="columns-2 sm:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="relative rounded-xl p-4 max-w-7xl w-[90%]">
            {/* زرار الإغلاق */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-xl sm:text-3xl font-black cursor-pointer text-red-700 hover:text-red-400 transition duration-500 hover:rotate-180 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 352 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>

            {/* الصورة داخل المودال */}
            <img
              loading="lazy"
              src={images[index].src}
              alt={images[index].title}
              className="max-h-[80vh] mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
