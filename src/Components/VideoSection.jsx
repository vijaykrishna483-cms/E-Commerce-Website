import React from 'react';

const VideoSection = () => {
  const videos = [
    { src: 'video1.mp4', price: '399/-', oldPrice: '599/-', labelImg: '/number1.png', title: 'Mutton Masala' },
    { src: 'video2.mp4', price: '399/-', oldPrice: '599/-', labelImg: '/number1.png', title: 'Mutton Masala' },
    { src: 'video3.mp4', price: '399/-', oldPrice: '599/-', labelImg: '/number1.png', title: 'Mutton Masala' },
    { src: 'video4.mp4', price: '399/-', oldPrice: '599/-', labelImg: '/number1.png', title: 'Mutton Masala' },
  ];

  return (
    <div className="min-h-screen bg-[#c8a2c8] flex flex-col items-center justify-center gap-6 p-6 sm:p-10 px-[5vw]">
      <h1 className="font-semibold text-3xl sm:text-4xl text-center">From The Hands Of Amma</h1>

      <div className="flex overflow-x-auto gap-6 scrollbar-hide py-4 w-full">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[80vw] sm:w-[300px] flex flex-col items-center justify-center"
          >
            <video
              src={video.src}
              className="w-full h-[60vw] sm:h-[450px] rounded-xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <button className="w-full bg-[#ffffffb5] rounded-xl flex justify-around items-center gap-2 py-2 mt-2 hover:bg-[#ffffffd1] transition-colors duration-300">
              <img src={video.labelImg} className="w-10" alt="label" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#e17f4c] leading-tight">
                  {video.title} <br /> New Offer Price
                </h3>
                <p className="text-sm sm:text-base">
                  {video.price} <span className="line-through">{video.oldPrice}</span>
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
