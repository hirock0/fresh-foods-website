"use client";

import RatingSystem from "@/components/productsRatingSystem/ratingSystem";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const RatingCards = () => {
  const [rating, setRating] = useState(0);



  return (
    <div className=" flex max-md:flex-col gap-5">
      <div className=" bg-slate-100 h-96 w-3/6 max-lg:w-4/6 max-md:w-full flex items-center justify-center">
        <Image
          src={"/images/goor.png"}
          alt="goor"
          width={500}
          height={500}
          className=" drop-shadow-lg"
        />
      </div>
      <div className=" flex items-center">
        <div className="">
          <div className="">
                <RatingSystem/>
                <h1 className="text-3xl mt-5">It tasted and smelled good</h1>
                <p className=" mt-10">
                I got Khejur Gur and ate it. Very good, Alhamdulillah. It tasted and smelled good. Molasses looks good. Alhamdulillah. Good luck to www.freshfood.com. 
                </p>
          </div>
          <div className=" flex items-center gap-5 mt-5">
            <div className=" w-12 h-12">
                <Image src={"/images/img_1.webp"} alt="user" width={500} height={500}/>
            </div>
            <div className="">
                <h1>	
                Mahbub Kabir Milon</h1>
                <p>
                Additional Secretary - Ministry of Public Administration & Managing Director at evaly.com.bd 
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCards;
