"use client";
import { MdTimer } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Card({ className, data, bg }) {
  const [fav, setFav] = useState(false);
  const { title, duration, type, img } = data;
  return (
    <div className={`max-w-[400px] ${className}`}>
      {/* Image Container with Heart Button */}
      <div className="relative">
        <img src={img} alt={title} className="w-full rounded-lg" />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full">
          <FaHeart
            onClick={() => setFav(!fav)}
            className={`w-4 h-4 cursor-pointer ${
              fav ? "text-red-500" : "text-gray-300"
            }`}
          />
        </button>
      </div>

      
        {/* Title */}
        <h2 className="text-[17px] font-semibold mt-4 mb-1 w-2/3">{title}</h2>

        {/* Metadata */}
        <div className="flex items-center gap-3 md:gap-6 text-gray-600 mt-6">
          <div className="flex items-center gap-1">
            <MdTimer className="text-3xl text-black" />
            <span className="">{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <PiForkKnifeFill className="text-3xl text-black" />
            <span className="">{type}</span>
          </div>
        </div>
      
    </div>
  );
}
