"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface FormData {
  productName: string;
  productPrice: string;
  productCategory: string;
  productSku: string;
  productTaq: string;
  productWeight: string;
  productQuality: string;
  productType: string;
  productBrand: string;
  productCollection: string;
  productImage: string;
  productImages: any;
  productDescriptions: string;
  productDiscount: string;
  productAvailability: string;
  productStock: string;
  // ----------
  companyName: string;
  companyAddress: string;
  companyContactNumber: string;
  companyWebsite: string;
  // -------------
  calories: string;
  protein: string;
  carbohydrates: string;
  fats: string;
  sugar: string;
  fiber: string;
  sodium: string;

}

const Upload_productsPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [productImage, setProductImage] = useState<any>("");
  const [productImages, setProductImages] = useState<any>([]);


  const onReadyData: SubmitHandler<FormData> = async(data) => {
    try {

      data.productImage = productImage;
      data.productImages = productImages;

      const response = await axios.post("/pages/api/admin/uploadProjects", data);
      if (response?.data?.success) {
        toast.success("Data is uploaded");
        reset();
        setProductImage("")
        setProductImages([])
      } else {
        toast.success("Data is not uploaded");
      }
    }
     catch (error: any) {
      throw new Error(error);
    }
  };

  // ----------------------------------


  // -------------------------------

  const base64 = (e: any) => {
    try {
      if (!e.target.multiple) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (result: any) => {
          setProductImage(result.target?.result);
        };
        reader.onerror = (error: any) => {
          alert("something goes wrong!");
        };
      } else {
        const Files = Array.from(e.target.files);
        Files.forEach((item: any, indx) => {
          const reader = new FileReader();
          reader.readAsDataURL(item);
          reader.onload = (result: any) => {
            setProductImages((prev: any) => [...prev, result.target.result]);
          };
          reader.onerror = (error: any) => {
            alert("something goes wrong!");
          };
        });
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <main>
      <div className=" container mx-auto px-5 pb-10">
        <h1 className=" text-center text-3xl">Upload Products</h1>
        <div className=" mt-5">
          <form
            onSubmit={handleSubmit((data) => onReadyData(data))}
            className=""
          >
            <div className="  grid grid-cols-3 gap-5">
              <div className="">
                <h1>Product Name</h1>
                <input
                  {...register("productName", { required: "need to fill it!" })}
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  className="h-12 pl-2 rounded-sm"
                />
                {errors.productName && (
                  <h1 className="pl-2">{errors.productName.message}</h1>
                )}
              </div>
              <div className="">
                <h1>Product Price</h1>
                <input
                  {...register("productPrice", {
                    required: "need to fill it!",
                  })}
                  type="text"
                  name="productPrice"
                  placeholder="Product Price"
                  className="h-12 pl-2 rounded-sm"
                />
                {errors.productPrice && (
                  <h1 className="pl-2">{errors.productPrice.message}</h1>
                )}
              </div>

              <div className="">
                <h1>Product Category</h1>
                <input
                  {...register("productCategory", {
                    required: "need to fill it!",
                  })}
                  type="text"
                  name="productCategory"
                  placeholder="Product Name"
                  className="h-12 pl-2 rounded-sm"
                />
                {errors.productCategory && (
                  <h1 className="pl-2">{errors.productCategory.message}</h1>
                )}
              </div>
              <div className="">
                <h1>Product SKU</h1>
                <input
                  {...register("productSku", { required: "need to fill it!" })}
                  type="text"
                  name="productSku"
                  placeholder="Product SKU"
                  className="h-12 pl-2 rounded-sm"
                />
                {errors.productSku && (
                  <h1 className="pl-2">{errors.productSku.message}</h1>
                )}
              </div>
              <div className="">
                <h1>Product TAQ</h1>
                <input
                  {...register("productTaq", { required: "need to fill it!" })}
                  type="text"
                  name="productTaq"
                  placeholder="Product Taq"
                  className="h-12 pl-2 rounded-sm"
                />
                {errors.productTaq && (
                  <h1 className="pl-2">{errors.productTaq.message}</h1>
                )}
              </div>
            </div>
            {/* ---------------------- */}
            <div className=" mt-10">
              <h1>Product Details</h1>
              <div className=" grid grid-cols-3 gap-5">
                <div className="">
                  <input
                    {...register("productWeight", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="productWeight"
                    placeholder="Product Weight"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.productWeight && (
                    <h1 className="pl-2">{errors.productWeight.message}</h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("productQuality", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="productQuality"
                    placeholder="Product Quality"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.productQuality && (
                    <h1 className="pl-2">{errors.productQuality.message}</h1>
                  )}
                </div>
                <div className="">
                  <h1>Product Type</h1>
                  <select
                    {...register("productType", {
                      required: "need to fill it!",
                    })}
                    name="productType"
                    className="h-12 pl-2 rounded-sm"
                  >
                    <option value="">Select Type</option>
                    <option value="grocery">Grocery</option>
                    <option value="mango">Mango</option>
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                  </select>
                  {errors.productType && (
                    <h1 className="pl-2">{errors.productType.message}</h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("productBrand", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="productBrand"
                    placeholder="Product Brand"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.productBrand && (
                    <h1 className="pl-2">{errors.productBrand.message}</h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("productCollection", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="productCollection"
                    placeholder="Product Collection"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.productCollection && (
                    <h1 className="pl-2">{errors.productCollection.message}</h1>
                  )}
                </div>

                <div className=" ">
                  <textarea
                    {...register("productDescriptions", {
                      required: "need to fill it!",
                    })}
                    name="productDescriptions"
                    placeholder="Product Descriptions"
                    className="h-12 pl-2 rounded-sm"
                  ></textarea>

                  {errors.productDescriptions && (
                    <h1 className="pl-2">
                      {errors.productDescriptions.message}
                    </h1>
                  )}
                </div>

                <div className="">
                  <input
                    {...register("productDiscount", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="productDiscount"
                    placeholder="Product Discount"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.productDiscount && (
                    <h1 className="pl-2">{errors.productDiscount.message}</h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("productAvailability", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="productAvailability"
                    placeholder="Product Availability"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.productAvailability && (
                    <h1 className="pl-2">
                      {errors.productAvailability.message}
                    </h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("productStock", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="productStock"
                    placeholder="Product Stock"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.productStock && (
                    <h1 className="pl-2">{errors.productStock.message}</h1>
                  )}
                </div>
              </div>
            </div>

            <div className="">
              <div className=" mt-5">
                <h1>Product Image</h1>
                <input
                  onChange={(e) => base64(e)}
                  type="file"
                  className="h-12 pl-2 rounded-sm"
                />
              </div>

              <div className={`${productImage == "" ? " hidden" : " block"}`}>
                <div className=" w-52 h-52">
                  <Image
                    src={productImage.toString()}
                    alt="img"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

              <div className="">
                <h1>Product Images</h1>
                <input
                  onChange={(e) => base64(e)}
                  type="file"
                  multiple
                  className="h-12 pl-2 rounded-sm"
                />
              </div>
            </div>

            <div className=" grid grid-cols-3 gap-5">
              {productImages?.map((item: any, index: any) => (
                <div key={index} className=" w-52 h-52">
                  <Image
                    src={item.toString()}
                    alt="img"
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>

            {/* ------------------ */}
            <div className="">
              <h1>Manufacturer Details</h1>
              <div className=" grid grid-cols-3 gap-5">
                <div className="">
                  <input
                    {...register("companyName", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.companyName && (
                    <h1 className="pl-2">{errors.companyName.message}</h1>
                  )}
                </div>

                <div className="">
                  <input
                    {...register("companyAddress", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="companyAddress"
                    placeholder="Company Address"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.companyAddress && (
                    <h1 className="pl-2">{errors.companyAddress.message}</h1>
                  )}
                </div>

                <div className="">
                  <input
                    {...register("companyContactNumber", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="companyContactNumber"
                    placeholder="Company Contact"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.companyContactNumber && (
                    <h1 className="pl-2">
                      {errors.companyContactNumber.message}
                    </h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("companyWebsite", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="companyWebsite"
                    placeholder="Company website link"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.companyWebsite && (
                    <h1 className="pl-2">{errors.companyWebsite.message}</h1>
                  )}
                </div>
              </div>
            </div>
            {/* --------------------------- */}
            <div className="">
              <h1>Nutritional Info</h1>
              <div className=" grid grid-cols-3 gap-5">
                <div className="">
                  <input
                    {...register("calories", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="calories"
                    placeholder="calories"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.calories && (
                    <h1 className="pl-2">{errors.calories.message}</h1>
                  )}
                </div>

                <div className="">
                  <input
                    {...register("protein", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="protein"
                    placeholder="protein"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.protein && (
                    <h1 className="pl-2">{errors.protein.message}</h1>
                  )}
                </div>

                <div className="">
                  <input
                    {...register("carbohydrates", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="carbohydrates"
                    placeholder="carbohydrates"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.carbohydrates && (
                    <h1 className="pl-2">{errors.carbohydrates.message}</h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("fats", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="fats"
                    placeholder="fats"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.fats && (
                    <h1 className="pl-2">{errors.fats.message}</h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("sugar", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="sugar"
                    placeholder="sugar"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.sugar && (
                    <h1 className="pl-2">{errors.sugar.message}</h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("fiber", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="fiber"
                    placeholder="fiber"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.fiber && (
                    <h1 className="pl-2">{errors.fiber.message}</h1>
                  )}
                </div>
                <div className="">
                  <input
                    {...register("sodium", {
                      required: "need to fill it!",
                    })}
                    type="text"
                    name="sodium"
                    placeholder="sodium"
                    className="h-12 pl-2 rounded-sm"
                  />
                  {errors.sodium && (
                    <h1 className="pl-2">{errors.sodium.message}</h1>
                  )}
                </div>
              </div>
            </div>

            {/* ----------------- */}

            <div className=" mt-5">
              <button type="submit" className=" w-full h-12 bg-lime-600">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Upload_productsPage;
