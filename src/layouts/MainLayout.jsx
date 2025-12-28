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
        <button
          onClick={() => handleNavigate("/main/loveletter")}
          className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
        >
          Love Letter
        </button>
        <button
          onClick={() => handleNavigate("/main/music")}
          className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
        >
          Music
        </button>

        <button
          onClick={() => handleNavigate("/main/ournote")}
          className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
        >
          Our Note
        </button>
        <button
          onClick={() => handleNavigate("/main/gallery")}
          className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
        >
          Gallery
        </button>
      </div>

      <div className="flex justify-center items-center flex-grow">
        {showTimer ? <ElapsedTimer /> : <Outlet />}
      </div>
    </div>
  );
}

export default MainLayout;
