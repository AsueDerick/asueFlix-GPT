import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-20 top-0 left-0 w-full h-screen pt-24 px-12 text-white bg-gradient-to-r from-black/80 to-transparent">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">{title}</h1>

      <p className="mt-6 text-lg max-w-md leading-relaxed text-gray-200">
        {overview}
      </p>

      <div className="mt-2 flex gap-4">
        {/* Play Button */}
        <button className="flex items-center gap-2  bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          <img
            className="w-5 h-5"
            src="https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png"
            alt="Play"
          />
          Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition">
          <img
            className="w-5 h-5 rounded-xl"
            src="https://w7.pngwing.com/pngs/656/832/png-transparent-computer-icons-information-symbol-press-conference-text-wikimedia-commons-information-sign.png"
            alt="Info"
          />
          More Info
        </button>
      </div>
    </div>
  );
};
