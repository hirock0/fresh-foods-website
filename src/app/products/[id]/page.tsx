"use client"

import { AllApiHandler } from "@/utils/redux/slices/slice"
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"




const Products = (props:any) => {
    const productId =props?.params?.id || ""


    const dispatch = useDispatch()
    const reqData = useSelector((state:any)=>state?.Slice)
    const Products = reqData?.products?.products
    const filterData = Products?.find((item:any)=>item?._id == productId)
    console.log(filterData)

    useEffect(()=>{
        dispatch(AllApiHandler())

    },[])

    return (
        <div>Products</div>
    )
}

export default Products
