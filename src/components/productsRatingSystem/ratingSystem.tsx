"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const RatingSystem = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={25}
              className={`cursor-pointer ${
                ratingValue <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingSystem;
