"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"
import { MdTimer } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaCirclePlay } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import Button from "../Button/Button";

const slides = [
  {
    tag: "/assets/header-script-icon.png",
    title: "Spicy delicious chicken wings",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    time: "30 Minutes",
    category: "Chicken",
    author: "John Smith",
    date: "15 March 2022",
    image: "/assets/headerImage.png",
  },
  {
    tag: "/assets/header-script-icon.png",
    title: "Spicy delicious chicken wings",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    time: "30 Minutes",
    category: "Chicken",
    author: "John Smith",
    date: "15 March 2022",
    image: "/assets/headerImage.png",
  },
  {
    tag: "/assets/header-script-icon.png",
    title: "Spicy delicious chicken wings",
    description:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    time: "30 Minutes",
    category: "Chicken",
    author: "John Smith",
    date: "15 March 2022",
    image: "/assets/headerImage.png",
  },
]

export default function Header() {
  return (
    <div className="px-10 md:px-20 lg:px-8 my-8">
      <Swiper
      slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-black",
        }}
        modules={[Autoplay, Pagination]}
        className="rounded-3xl overflow-hidden [&_.swiper-pagination-bullet-active]:bg-black [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2"
        style={{
          "--swiper-pagination-bottom": "20px",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-primary">
              {/* Left Content */}
              <div className="p-8 md:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-white w-fit">
                    <Image alt="icon" width={24} height={24} src={slide.tag}/>
                  <p className="text-black">Hot recipes</p>
                </div>

                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{slide.title}</h1>

                <p className="mt-4 text-gray-600 text-sm md:text-base">{slide.description}</p>

                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2 bg-gray-300 rounded-full px-3 py-2">
                    <MdTimer className="w-5 h-5" />
                    <span className="text-sm">{slide.time}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-300 rounded-full px-3 py-2">
                    <PiForkKnifeFill className="w-5 h-5" />
                    <span className="text-sm">{slide.category}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/assets/avatar.png"
                        alt={slide.author}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{slide.author}</p>
                      <p className="text-sm text-gray-500">{slide.date}</p>
                    </div>
                  </div>

                  <Button bg={'bg-black'}>
                    <div className="flex flex-row justify-between items-center space-x-2">
                        <p className="text-white">View Recipes</p>
                        <FaCirclePlay className="text-2xl text-white"/>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* badge */}
            <Image className="absolute top-[520px] left-[200px] md:top-[50px] md:left-[720px]" alt="badge" src={"/assets/badge.png"} width={150} height={150}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

