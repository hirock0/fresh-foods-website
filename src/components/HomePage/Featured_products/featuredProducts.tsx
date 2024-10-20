"use client";

import ProductCards from "../productCards/productCards";

const featuredProductData = [
  {
    title: "Hari Vanga",
    priceRange: "1200Tk - 1500Tk",
    product: "MANGO",
    image: "/images/img_1.webp",
  },
  {
    title: "Hari Vanga",
    priceRange: "1200Tk - 1500Tk",
    product: "MANGO",
    image: "/images/img_1.webp",
  },
  {
    title: "Hari Vanga",
    priceRange: "1200Tk - 1500Tk",
    product: "MANGO",
    image: "/images/img_1.webp",
  },
  {
    title: "Hari Vanga",
    priceRange: "1200Tk - 1500Tk",
    product: "MANGO",
    image: "/images/img_1.webp",
  },
];

const FeaturedProducts = () => {
  return (
    <div>
      <ProductCards products={featuredProductData} />
    </div>
  );
};

export default FeaturedProducts;
