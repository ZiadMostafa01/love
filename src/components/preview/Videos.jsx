function Videos() {
  const videos = [
    "/love/videos/Recap2025.mp4",
    "/love/videos/Video1.mp4",
    "/love/videos/Video2.mp4",
    "/love/videos/Video3.mp4",
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-caliny font-bold text-[#be0000] my-10">
        🎥 OUR Videos 🎥
      </h2>

      <div className="w-full flex gap-10 flex-wrap justify-center">
        {videos.map((src, index) => (
          <video
            key={index}
            controls
            preload="metadata"
            className="w-full lg:w-[230px]  xl:w-[310px]  2xl:w-[385px] shadow-lg h-[350px] rounded-2xl"
          >
            <source src={src} type="video/mp4" />
            المتصفح لا يدعم الفيديو
          </video>
        ))}
      </div>
    </div>
  );
}

export default Videos;
