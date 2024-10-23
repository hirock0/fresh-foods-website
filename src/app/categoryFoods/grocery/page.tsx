"use client"
import { AllApiHandler } from "@/utils/redux/slices/slice"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
const GroceryPage = () => {

    const dispatch = useDispatch()
    const reqData = useSelector((state:any)=>state?.Slice)
    const Products = reqData?.products?.products


    console.log(Products)
    useEffect(()=>{
        dispatch(AllApiHandler())
   

    },[])


    return (
        <main className=" pb-20">
            <div className=" container mx-auto px-5 flex">
                <div className=" grid grid-cols-3 gap-5">
                {
                    Products?.map((item:any,index:any)=>(
                        <div key={index} className=" bg-white p-5 rounded-md shadow-lg">
                            <Link href={`/products/${item?._id}`}>
                                <div className="">
                                <Image src={item?.productImage?.productUrl} alt="img" width={500} height={500}/>
                                </div>
                                <div className="">
                                    <h1 className=" text-xl">{item?.productName}</h1>
                                    <h1 className=" opacity-80">{item?.productPrice} TK</h1>
                                    <h1 className=" opacity-80">{item?.productType.toUpperCase()}</h1>
                                </div>
                            </Link>
                        </div>
                    ))
                }
                </div>
                <div className=" max-lg:hidden">
                    sdfdsg
                </div>
            </div>
        </main>
    )
}

export default GroceryPage
