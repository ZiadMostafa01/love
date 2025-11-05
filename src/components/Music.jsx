function Music() {
  const videos = [
    "https://www.youtube.com/embed/wNut8QshEx0",
    "https://www.youtube.com/embed/QHC-9PGT5ZQ?list=RDQHC-9PGT5ZQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#ff6b81] my-10">🎶 OUR MUSIC</h2>

      {/* 2️⃣ هنا الماب بتكرّر iframe لكل فيديو */}
      <div className="w-full flex gap-10 flex-wrap justify-center">
        {videos.map((src, index) => (
          <iframe
            key={index}
          className=" h-[350px] rounded-2xl"
            src={src}
            title={`YouTube video player ${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default Music;
