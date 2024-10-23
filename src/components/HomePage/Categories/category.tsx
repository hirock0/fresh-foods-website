"use client"
import Link from 'next/link'
import Style from './category.module.css'
import Image from "next/image"
const Category = () => {
    return (

        <div className=" container mx-auto px-5 flex max-md:flex-col max-md:items-center gap-5">
            {/* ---------------------- */}
            <div className={`${Style.categoryDiv} w-full grid lg:grid-cols-2 max-lg:grid-cols-1  gap-5`}>
                <div className=" relative h-[500px] bg-zinc-200  rounded-lg overflow-hidden shadow-md max-md:h-[300px]  lg:col-span-2  ">
                <Image
                    src={"/category_images/image_3.3.png"}
                    alt="cat"
                    width={500}
                    height={500}
                    className=" w-full h-full object-cover"
                />
                <Link href={"/categoryFoods/grocery"} className=" ">
                    GROCERY
                </Link>
                </div>

                <div className=" relative h-[500px]  max-md:h-[300px] bg-zinc-200  overflow-hidden  rounded-lg shadow-md  ">
                <Image
                    src={"/category_images/image_4.4.png"}
                    alt="cat"
                    width={500}
                    height={500}
                    className=" w-full h-full object-cover"
                />
                <Link href={"/"} className=" ">
                    MANGO
                </Link>
                </div>
                <div className=" relative h-[500px]  max-md:h-[300px] bg-zinc-200 overflow-hidden  rounded-lg shadow-md  ">
                <Image
                    src={"/category_images/image_5.5.5.png"}
                    alt="cat"
                    width={500}
                    height={500}
                    className=" w-full h-full object-cover"
                />
                <Link href={"/"} className=" ">
                    HONEY
                </Link>
                </div>
            </div>
            {/* --------------------------- */}
            {/* ----------------------------- */}
            <div className={`${Style.categoryDiv} grid gap-5 w-full`}>
                <div className=" relative h-[400px]  max-md:h-[300px]  bg-zinc-200  overflow-hidden  rounded-lg shadow-md  ">
                <Image
                    src={"/category_images/image_1.1.1.png"}
                    alt="cat"
                    width={500}
                    height={500}
                    className=" w-full h-full object-cover"
                />
                <Link href={"/"} className=" ">
                    FOOD
                </Link>
                </div>
                <div className=" relative h-[600px] bg-zinc-200 rounded-lg overflow-hidden shadow-md max-md:h-[300px] ">
                <Image
                    src={"/category_images/image_6.6.6.png"}
                    alt="cat"
                    width={500}
                    height={500}
                    className=" w-full h-full object-cover"
                />
                <Link href={"/"} className=" ">
                    HOMELY
                </Link>
                </div>
            </div>
            {/* ---------------- */}
        </div>
 
    )
}

export default Category
