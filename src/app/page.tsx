import HeroSection from "@/components/hero_section/heroSection";
import { AiOutlineLike } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineSafety } from "react-icons/ai";
import Image from "next/image";
const Home = () => {
  return (
    <main>
      {/* hero_section_start */}
      <div className=" container mx-auto px-5">
        <HeroSection />
      </div>
      {/* hero_section_end */}
      {/* section_2_start */}
      <div className=" bg-lime-600 text-white py-20">
        <div className="container mx-auto px-5 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          <div className=" flex flex-col justify-center items-center gap-5">
            <div className=" p-2  border-2  rounded-full">
              <AiOutlineLike size={20} />
            </div>
            <h1 className=" text-3xl max-sm:text-2xl font-semibold text-center">
              High Quality
            </h1>
            <p className=" text-center opacity-90">
              Best in the market. We deal with
              <br /> various quality organic products!
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-5">
            <CiDeliveryTruck size={45} />

            <h1 className=" text-3xl max-sm:text-2xl font-semibold text-center">
              First Delivery
            </h1>
            <p className=" text-center opacity-90">
              Just click and the product will reach
              <br /> your home or office quickly.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-5">
            <AiOutlineSafety size={45} />

            <h1 className=" text-3xl max-sm:text-2xl font-semibold text-center">
              100% Safe
            </h1>
            <p className=" text-center opacity-90">
              Verified payment gateway and free
              <br /> returns track or cancel orders.
            </p>
          </div>
        </div>
      </div>
      {/* section_2_end */}

      {/* section_3_start */}

      <div className=" flex justify-center mt-10">
        {/* --------------------------- */}
        <div className=" container mx-auto px-5 flex max-md:flex-col max-md:items-center gap-5">
          {/* ---------------------- */}
          <div className=" w-full grid lg:grid-cols-2 max-lg:grid-cols-1  gap-5">
            <div className=" relative h-[500px] bg-zinc-200  rounded-lg overflow-hidden shadow-md max-md:h-[300px]  lg:col-span-2  ">
              <Image
                src={"/category_images/image_3.3.png"}
                alt="cat"
                width={500}
                height={500}
                className=" w-full h-full object-cover"
              />
              <button className=" absolute bottom-10 left-10 bg-white h-20 w-3/6 font-semibold rounded-sm shadow-lg">
                GROCERY
              </button>
            </div>
            <div className=" relative h-[500px]  max-md:h-[300px] bg-zinc-200  overflow-hidden  rounded-lg shadow-md  ">
              <Image
                src={"/category_images/image_4.4.png"}
                alt="cat"
                width={500}
                height={500}
                className=" w-full h-full object-cover"
              />
              <button className=" absolute bottom-10 left-10 bg-white h-20 w-3/6 font-semibold rounded-sm shadow-lg">
                GROCERY
              </button>
            </div>
            <div className=" relative h-[500px]  max-md:h-[300px] bg-zinc-200 overflow-hidden  rounded-lg shadow-md  ">
              <Image
                src={"/category_images/image_5.5.5.png"}
                alt="cat"
                width={500}
                height={500}
                className=" w-full h-full object-cover"
              />
              <button className=" absolute bottom-10 left-10 bg-white h-20 w-3/6 font-semibold rounded-sm shadow-lg">
                GROCERY
              </button>
            </div>
          </div>
          {/* --------------------------- */}
          {/* ----------------------------- */}
          <div className=" grid gap-5 w-full">
            <div className=" relative h-[400px]  max-md:h-[300px]  bg-zinc-200  overflow-hidden  rounded-lg shadow-md  ">
              <Image
                src={"/category_images/image_1.1.1.png"}
                alt="cat"
                width={500}
                height={500}
                className=" w-full h-full object-cover"
              />
              <button className=" absolute bottom-10 left-10 bg-white h-20 w-3/6 font-semibold rounded-sm shadow-lg">
                GROCERY
              </button>
            </div>
            <div className=" relative h-[600px] bg-zinc-200 rounded-lg overflow-hidden shadow-md max-md:h-[300px] ">
              <Image
                src={"/category_images/image_6.6.6.png"}
                alt="cat"
                width={500}
                height={500}
                className=" w-full h-full object-cover"
              />
              <button className=" absolute bottom-10 left-10 bg-white h-20 w-3/6 font-semibold rounded-sm shadow-lg">
                GROCERY
              </button>
            </div>
          </div>
          {/* ---------------- */}
        </div>
      </div>
      {/* section_3_end */}
      {/* view_all_start */}

      <div className=" my-20">
        <div className=" container mx-auto px-5 flex items-center justify-between">
          <h1>New Arrivals</h1>
          <button className=" h-12 w-1/6 max-md:w-2/6 border-black border-2">
            VIEW ALL
          </button>
        </div>
      </div>
      {/* view_all_end */}
    </main>
  );
};

export default Home;
