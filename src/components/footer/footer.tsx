import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <nav className=" text-white flex items-center bg-lime-600 h-24 max-md:h-auto max-md:py-10">
        <div className=" flex max-md:flex-col items-center justify-between container mx-auto px-5">
          <ul className=" flex max-md:flex-wrap max-md:justify-center  items-center gap-5">
            <Link href={""}>
              <li>Home</li>
            </Link>
            <Link href={""}>
              <li>Home</li>
            </Link>
            <Link href={""}>
              <li>Home</li>
            </Link>
            <Link href={""}>
              <li>Home</li>
            </Link>
            <Link href={""}>
              <li>Home</li>
            </Link>
            <Link href={""}>
              <li>Home</li>
            </Link>
          </ul>
          <div className=" max-md:mt-5">
            <ul className=" flex items-center gap-5">
              <Link href={""}>
                <li>fa</li>
              </Link>
              <Link href={""}>
                <li>ga</li>
              </Link>
              <Link href={""}>
                <li>ins</li>
              </Link>
              <Link href={""}>
                <li>you</li>
              </Link>
              <Link href={""}>
                <li>M</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div className="">
        <div className=" flex items-center max-md:flex-col gap-5 container mx-auto px-5 py-10">
          <div className=" w-3/6 max-sm:w-full flex flex-col items-center">
            <div className=" w-52">
              <Image
                src={"/logos/logo.webp"}
                alt="logo"
                width={500}
                height={500}
              />
            </div>
            <p className=" mt-5 text-center ">
              Fresh Food Online Store. A combination of 100% organic products. A
              trusted online store that supplies all kinds of quality groceries
              and natural food.
            </p>
          </div>
          <div className=" flex items-center justify-center ">
            <div className=" grid grid-cols-3 max-lg:grid-cols-2  gap-5">
              <div className="">
                <h1 className=" text-xl font-semibold">Categories</h1>
                <ul className="mt-5 flex flex-col gap-3 text-sm">
                  <Link href={""}>
                    <li>Uncategorized(9)</li>
                  </Link>
                  <Link href={""}>
                    <li>Combo pack2</li>
                  </Link>
                  <Link href={""}>
                    <li>Food(2)</li>
                  </Link>
                  <Link href={""}>
                    <li>Grocery(3)</li>
                  </Link>
                  <Link href={""}>
                    <li>Homely(3)</li>
                  </Link>
                  <Link href={""}>
                    <li>Honey(5)</li>
                  </Link>
                  <Link href={""}>
                    <li>Mango(11)</li>
                  </Link>
                  <Link href={""}>
                    <li>Sugar(10)</li>
                  </Link>
                </ul>
              </div>
              <div className="">
                <h1 className=" text-xl font-semibold">Categories</h1>
                <ul className="mt-5 flex flex-col gap-3 text-sm">
                  <Link href={""}>
                    <li>Uncategorized(9)</li>
                  </Link>
                  <Link href={""}>
                    <li>Combo pack2</li>
                  </Link>
                  <Link href={""}>
                    <li>Food(2)</li>
                  </Link>
                  <Link href={""}>
                    <li>Grocery(3)</li>
                  </Link>
                  <Link href={""}>
                    <li>Homely(3)</li>
                  </Link>
                  <Link href={""}>
                    <li>Honey(5)</li>
                  </Link>
                  <Link href={""}>
                    <li>Mango(11)</li>
                  </Link>
                  <Link href={""}>
                    <li>Sugar(10)</li>
                  </Link>
                </ul>
              </div>
              <div className="">
                <h1 className=" text-xl font-semibold">Categories</h1>
                <ul className="mt-5 flex flex-col gap-3 text-sm">
                  <Link href={""}>
                    <li>Uncategorized(9)</li>
                  </Link>
                  <Link href={""}>
                    <li>Combo pack2</li>
                  </Link>
                  <Link href={""}>
                    <li>Food(2)</li>
                  </Link>
                  <Link href={""}>
                    <li>Grocery(3)</li>
                  </Link>
                  <Link href={""}>
                    <li>Homely(3)</li>
                  </Link>
                  <Link href={""}>
                    <li>Honey(5)</li>
                  </Link>
                  <Link href={""}>
                    <li>Mango(11)</li>
                  </Link>
                  <Link href={""}>
                    <li>Sugar(10)</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------- */}
      <div className="bg-white">
        <div className=" container mx-auto px-5 flex max-md:flex-col items-center justify-between py-10">
          <div className="">
            <h1>
              Copyright © 2024 freshfood.com.bd - All Rights Reserved |
              Devoloped By
              <br /> seovai.com
            </h1>
          </div>
          <ul className=" flex items-center justify-between gap-5">
            <Link href={""}>
              <li>Visa</li>
            </Link>
            <Link href={""}>
              <li>Visa</li>
            </Link>
            <Link href={""}>
              <li>Visa</li>
            </Link>
            <Link href={""}>
              <li>Visa</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
