"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";

const HeroSection = () => {
  return (
    <div className=" pb-10">
      <Swiper
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className="  flex max-md:flex-col py-32 max-md:py-10 gap-5 ">
            <div className=" w-1/2 max-md:w-full ">
              <h1 className="text-lime-600">Fresh & Organic</h1>
              <h1 className=" text-5xl max-sm:text-4xl mt-5">Pure Gwa Ghee</h1>
              <p className="mt-5 max-sm:text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                quam sit numquam magni autem qui! Earum tempora ea eligendi
                assumenda minima vero, delectus provident molestias. At sed
                pariatur corrupti distinctio.
              </p>
              <div className="max-md:mt-5 mt-10 flex items-center gap-5 max-md:flex max-md:justify-center max-sm:text-sm">
                <button className=" w-52 h-12 bg-lime-600 hover:bg-lime-700 active:bg-lime-800 rounded-sm shadow-lg text-white max-md:w-40 max-sm:w-28">
                  BUY NOW
                </button>
                <button className=" w-52 h-12 bg-white hover:bg-slate-200 active:bg-slate-300 rounded-sm shadow-lg  max-md:w-40 max-sm:w-28">
                  DETAILS
                </button>
              </div>
            </div>
            <div className="  w-1/2  max-md:w-full flex items-center justify-center ">
              <div className=" relative">
                <Image
                  src={"/hero_images/slide_1.webp"}
                  alt="honey"
                  width={500}
                  height={500}
                  className=""
                />
                <h1 className=" absolute top-0 right-0 bg-white py-4 px-8 text-xl font-semibold max-md:hidden">
                  259 Tk.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  flex max-md:flex-col py-32 max-md:py-10 gap-5 ">
            <div className=" w-1/2 max-md:w-full ">
              <h1 className="text-lime-600">Fresh & Organic</h1>
              <h1 className=" text-5xl max-sm:text-4xl mt-5">Pure Gwa Ghee</h1>
              <p className="mt-5 max-sm:text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                quam sit numquam magni autem qui! Earum tempora ea eligendi
                assumenda minima vero, delectus provident molestias. At sed
                pariatur corrupti distinctio.
              </p>
              <div className="max-md:mt-5 mt-10 flex items-center gap-5 max-md:flex max-md:justify-center max-sm:text-sm">
                <button className=" w-52 h-12 bg-lime-600 hover:bg-lime-700 active:bg-lime-800 rounded-sm shadow-lg text-white max-md:w-40 max-sm:w-28">
                  BUY NOW
                </button>
                <button className=" w-52 h-12 bg-white hover:bg-slate-200 active:bg-slate-300 rounded-sm shadow-lg  max-md:w-40 max-sm:w-28">
                  DETAILS
                </button>
              </div>
            </div>
            <div className="  w-1/2  max-md:w-full flex items-center justify-center ">
              <div className=" relative">
                <Image
                  src={"/hero_images/slide_1.webp"}
                  alt="honey"
                  width={500}
                  height={500}
                  className=""
                />
                <h1 className=" absolute top-0 right-0 bg-white py-4 px-8 text-xl font-semibold max-md:hidden">
                  259 Tk.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  flex max-md:flex-col py-32 max-md:py-10 gap-5 ">
            <div className=" w-1/2 max-md:w-full ">
              <h1 className="text-lime-600">Fresh & Organic</h1>
              <h1 className=" text-5xl max-sm:text-4xl mt-5">Pure Gwa Ghee</h1>
              <p className="mt-5 max-sm:text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                quam sit numquam magni autem qui! Earum tempora ea eligendi
                assumenda minima vero, delectus provident molestias. At sed
                pariatur corrupti distinctio.
              </p>
              <div className="max-md:mt-5 mt-10 flex items-center gap-5 max-md:flex max-md:justify-center max-sm:text-sm">
                <button className=" w-52 h-12 bg-lime-600 hover:bg-lime-700 active:bg-lime-800 rounded-sm shadow-lg text-white max-md:w-40 max-sm:w-28">
                  BUY NOW
                </button>
                <button className=" w-52 h-12 bg-white hover:bg-slate-200 active:bg-slate-300 rounded-sm shadow-lg  max-md:w-40 max-sm:w-28">
                  DETAILS
                </button>
              </div>
            </div>
            <div className="  w-1/2  max-md:w-full flex items-center justify-center ">
              <div className=" relative">
                <Image
                  src={"/hero_images/slide_1.webp"}
                  alt="honey"
                  width={500}
                  height={500}
                  className=""
                />
                <h1 className=" absolute top-0 right-0 bg-white py-4 px-8 text-xl font-semibold max-md:hidden">
                  259 Tk.
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
