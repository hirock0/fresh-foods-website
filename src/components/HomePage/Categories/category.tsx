"use client"
import Style from './category.module.css'
import Image from "next/image"
const Category = () => {
    return (

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
 
    )
}

export default Category
