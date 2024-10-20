import React from "react";
import Style from "./productCards.module.css";
import Image from "next/image";
interface Props{
  products:any
}

const ProductCards:React.FC<Props> = ({products}) => {

  return (
    <div
      className={`${Style.arrival} grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1`}
    >
      {products?.map((item: any, index: any) => (
        <div key={index} className="">
          <div className="border-b">
            <Image
              src={item?.image}
              alt="arrival"
              width={500}
              height={500}
              className=" "
            />
          </div>
          <div className="mt-5">
            <h1>{item.title}</h1>
            <h2>{item?.priceRange}</h2>
            <h2>{item.product}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
