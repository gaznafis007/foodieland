import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa"
import { BsThreeDots } from "react-icons/bs"
import { FiMessageCircle } from "react-icons/fi"
import { RiShareForwardLine } from "react-icons/ri"
import { useState } from "react"

export default function InstagramPost({image}) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="max-w-[468px] bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={'/assets/oval-logo.png'}
              alt="Foodieland profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm">Foodieland</span>
              <span className="text-blue-500">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
            </div>
            <p className="text-xs text-gray-500">Tokyo, Japan</p>
          </div>
        </div>
        <button className="text-gray-600">
          <BsThreeDots className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image */}
      <div className="aspect-square w-full relative">
        <img
          src={image}
          alt="Fresh salad dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-gray-900/60 text-white text-xs px-2 py-1 rounded-full">1/3</div>
      </div>

      {/* Action Buttons */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button className="hover:text-gray-600 transition-colors" onClick={() => setIsLiked(!isLiked)}>
              {isLiked ? <FaHeart className="w-6 h-6 text-red-500" /> : <FaRegHeart className="w-6 h-6" />}
            </button>
            <button className="hover:text-gray-600">
              <FiMessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:text-gray-600">
              <RiShareForwardLine className="w-6 h-6" />
            </button>
          </div>
          <button className="hover:text-gray-600 transition-colors" onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? <FaBookmark className="w-6 h-6" /> : <FaRegBookmark className="w-6 h-6" />}
          </button>
        </div>

        {/* Likes */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hnXJ7vtcFiXiVyQrEHlRSKTVGo1eJL.png"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm">
            Liked by <span className="font-semibold">craig_love</span> and{" "}
            <span className="font-semibold">44,686 others</span>
          </p>
        </div>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold mr-2">Foodieland:</span>
          The vegetables dishes need to have certain vitamin for those people
        </div>

        {/* Date */}
        <p className="text-xs text-gray-500 mt-2">September 19</p>
      </div>
    </div>
  )
}

