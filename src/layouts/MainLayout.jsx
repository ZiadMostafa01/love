import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import ElapsedTimer from "../components/Timer";

function MainLayout() {
  const navigate = useNavigate();
  const [showTimer, setShowTimer] = useState(true);

  const handleNavigate = (path) => {
    setShowTimer(false);
    navigate(path);
  };

  return (
    <div
      className="rounded-xl w-[95%] sm:w-[60%] min-h-[500px] p-10 shadow-2xl flex flex-col 
                    bg-white/40 backdrop-blur-md border border-white/30 transition duration-300"
    >
      <div className="flex flex-wrap justify-between gap-5 mb-5">
        <div
          className="w-full font-caliny font-bold text-3xl text-red-700 text-center"
          data-aos="fade-down"
          data-aos-duration="850"
        >
          <span>Rody</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            className="w-60 mx-auto"
          >
            <path
              fill="#BE052C"
              d="M500 0c0 28-22 50-50 50 28 0 50 22 50 50 0-28 22-50 50-50-28 0-50-22-50-50ZM620 10c0 22-18 40-40 40 22 0 40 18 40 40 0-22 18-40 40-40-22 0-40-18-40-40ZM380 10c0 22-18 40-40 40 22 0 40 18 40 40 0-22 18-40 40-40-22 0-40-18-40-40ZM720 20c0 17-13 30-30 30 17 0 30 13 30 30 0-17 13-30 30-30-17 0-30-13-30-30ZM280 20c0 17-13 30-30 30 17 0 30 13 30 30 0-17 13-30 30-30-17 0-30-13-30-30Z"
            ></path>
          </svg>
          <span className="font-timer text-2xl sm:text-3xl ">Maybe not today, maybe not tomorrow, but one day.</span>
        </div>
        <div className="w-full" data-aos="fade-down" data-aos-duration="850">
          {" "}
          <button
            onClick={() => handleNavigate("/main/loveletter")}
            className="w-full cursor-pointer bg-[#ff435f]  text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
          >
            Love Letter
          </button>
        </div>{" "}
        <div className="w-full" data-aos="fade-down" data-aos-duration="850">
          {" "}
          <button
            onClick={() => handleNavigate("/main/videos")}
            className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
          >
            Videos
          </button>
        </div>{" "}
        <div className="w-full" data-aos="fade-down" data-aos-duration="750">
          {" "}
          <button
            onClick={() => handleNavigate("/main/music")}
            className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
          >
            Music
          </button>
        </div>{" "}
        <div className="w-full" data-aos="fade-down" data-aos-duration="650">
          {" "}
          <button
            onClick={() => handleNavigate("/main/ournote")}
            className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
          >
            Our Note
          </button>
        </div>{" "}
        <div className="w-full" data-aos="fade-down" data-aos-duration="550">
          <button
            onClick={() => handleNavigate("/main/gallery")}
            className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
          >
            Gallery
          </button>
        </div>
      </div>

      <div
        className="flex justify-center items-center flex-grow"
        data-aos="zoom-in"
      >
        {showTimer ? <ElapsedTimer /> : <Outlet />}
      </div>
    </div>
  );
}

export default MainLayout;
