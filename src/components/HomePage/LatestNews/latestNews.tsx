"use client";

import Image from "next/image";
import Link from "next/link";

const NewsArray = [
  {
    name: "Grocery",
    title: "The Benefits of Fresh Groceries",
    productLink: "/",
    image: "/images/img_1.webp",
    descriptions:
      "Introduction Fresh groceries are an essential part of a healthy and balanced diet. From vibrant…",
  },

  {
    name: "Grocery",
    title: "The Benefits of Fresh Groceries",
    productLink: "/",
    image: "/images/img_1.webp",
    descriptions:
      "Introduction Fresh groceries are an essential part of a healthy and balanced diet. From vibrant…",
  },
  {
    name: "Grocery",
    title: "The Benefits of Fresh Groceries",
    productLink: "/",
    image: "/images/img_1.webp",
    descriptions:
      "Introduction Fresh groceries are an essential part of a healthy and balanced diet. From vibrant…",
  },
];

const LatestNews = () => {
  return (
    <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
      {NewsArray.map((item: any, index: any) => (
        <div
          key={index}
          className=" bg-white shadow-lg rounded-md overflow-hidden"
        >
          <Link href={""} className="">
            <div className=" h-96">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className=" h-full w-full object-cover"
              />
            </div>
          </Link>
          <div className="  flex flex-col gap-5 p-5">
            <h1>{item.name}</h1>
            <h1 className=" text-2xl font-semibold">{item.title}</h1>
            <p>{item.descriptions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
