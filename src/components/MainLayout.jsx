import { Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-xl w-[95%] sm:w-[60%] min-h-[500px] p-10 shadow-2xl flex flex-col 
                    bg-white/40 backdrop-blur-md border border-white/30 transition duration-300"
    >
      <div className="flex flex-wrap justify-between gap-5 mb-5">
        <button
          onClick={() => navigate("/main/loveletter")}
          className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
        >
          Love Letter
        </button>
        <button
          onClick={() => navigate("/main/music")}
          className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
        >
          Music
        </button>

        <button
          onClick={() => navigate("/main/ournote")}
          className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
        >
          Our Note
        </button>
        <button
          onClick={() => navigate("/main/gallery")}
          className="w-full cursor-pointer bg-[#ff435f] text-white py-2 rounded-md hover:bg-[#cf2841] transition duration-300"
        >
          Gallery
        </button>
      </div>

      <div className="flex justify-center items-center flex-grow">
        <Outlet /> {/* هنا هيظهر المحتوى اللي بيتغير */}
      </div>
    </div>
  );
}

export default MainLayout;
