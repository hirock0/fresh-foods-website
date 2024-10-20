"use client";

import ProductCards from "../productCards/productCards";

const newArrivalProductData = [
  {
    title: "Hari hdfh",
    priceRange: "1200Tk - 1500Tk",
    product: "MANGO",
    image: "/images/img_1.webp",
  },
  {
    title: "Hari Vanga",
    priceRange: "1200Tk - 1500Tk",
    product: "MANGO",
    image: "/images/img_2.webp",
  },
  {
    title: "Hari Vanga",
    priceRange: "1200Tk - 1500Tk",
    product: "MANGO",
    image: "/images/img_3.webp",
  },
  {
    title: "Hari Vanga",
    priceRange: "1200Tk - 1500Tk",
    product: "MANGO",
    image: "/images/img_4.webp",
  },
];

const NewArrivalsProducts = (props: any) => {
  return (
    <div>
      <ProductCards products={newArrivalProductData} />
    </div>
  );
};

export default NewArrivalsProducts;
