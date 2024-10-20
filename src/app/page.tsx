import HeroSection from "@/components/hero_section/heroSection";
import { AiOutlineLike } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineSafety } from "react-icons/ai";
import Category from "@/components/HomePage/Categories/category";
import Link from "next/link";
import FeaturedProducts from "@/components/HomePage/Featured_products/featuredProducts";
import NewArrivalsProducts from "@/components/HomePage/NewArrivalsProducts/newArrivalsProducts";
import RatingCards from "@/components/HomePage/ProductRatingCards/ratingCards";
import LatestNews from "@/components/HomePage/LatestNews/latestNews";
const Home = () => {
  return (
    <main>
      {/* hero_section_start */}
      <div className=" container mx-auto px-5">
        <HeroSection />
      </div>
      {/* hero_section_end */}
      {/* section_2_start */}
      <div className=" section_2 bg-lime-600 text-white py-20">
        <div className="container mx-auto px-5 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          <div className=" ">
            <div className=" p-2  border-2  rounded-full">
              <AiOutlineLike size={20} />
            </div>
            <h1 className=" ">High Quality</h1>
            <p className=" ">
              Best in the market. We deal with
              <br /> various quality organic products!
            </p>
          </div>
          <div className="">
            <CiDeliveryTruck size={45} />

            <h1 className=" ">First Delivery</h1>
            <p className=" ">
              Just click and the product will reach
              <br /> your home or office quickly.
            </p>
          </div>
          <div className=" ">
            <AiOutlineSafety size={45} />

            <h1 className="">100% Safe</h1>
            <p className=" ">
              Verified payment gateway and free
              <br /> returns track or cancel orders.
            </p>
          </div>
        </div>
      </div>
      {/* section_2_end */}
      <div className=" flex justify-center mt-10">
        <Category />
      </div>
      {/* section_3_start */}

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
      {/* section_4_start */}

      <div className="">
        <div className=" container mx-auto px-5">
          <NewArrivalsProducts />
        </div>
      </div>
      {/* section_4_end */}
      {/* section_5_start */}
      <div
        className={`discountDiv mt-20 h-[700px] flex items-center justify-center`}
      >
        <div className=" container mx-auto px-5 flex flex-col gap-10 max-md:gap-5 text-white ">
          <h1 className=" text-5xl max-md:text-4xl max-sm:text-3xl ">
            10% discount on fresh
            <br /> and various spices
          </h1>
          <p className=" w-2/6 max-md:w-full ">
            Fresh Food has collected the best variety of food garam masala from
            home and abroad. Our customers will be fully satisfied as its
            quality is highest.
          </p>
          <Link href={""} className=" h-12 w-1/5 max-md:w-2/5">
            <button className=" h-full w-full bg-lime-600 hover:bg-lime-700 active:bg-lime-800 rounded-sm shadow-md shadow-slate-700">
              DETAILS
            </button>
          </Link>
        </div>
      </div>

      {/* section_5_end */}
      {/* section_6_start */}
      <div className=" mt-10">
        <h1 className=" my-10 text-4xl text-center font-semibold">
          Featured Products
        </h1>
        <div className=" container mx-auto px-5">
          <FeaturedProducts />
        </div>
      </div>

      {/* section_6_end */}
      {/* section_7_start */}

      <div className=" my-20">
        <div className=" bg-white rounded-sm container mx-auto px-5 py-10">
          <RatingCards />
        </div>
      </div>
      {/* section_7_end */}
      {/* section_8_start */}

      <div className=" my-20">
        <div className=" container mx-auto px-5">
          <h1 className=" text-4xl text-center font-semibold my-10">
            Latest News
          </h1>
          <LatestNews />
        </div>
      </div>
      {/* section_8_end */}
    </main>
  );
};

export default Home;
