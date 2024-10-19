"use client";
import Image from "next/image";
import Style from "./nav.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrCart } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [navFlag, setNavFlag] = useState(false);
  useEffect(() => {}, []);
  return (
    <nav className=" sticky top-0 backdrop:filter backdrop-blur-3xl z-50 border-black flex items-center h-24">
      <div className=" container mx-auto px-5 flex items-center justify-between">
        <div className="">
          <div className=" w-20 h-20">
            <Image
              src={"/logos/logo.webp"}
              alt="logo"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* middle_start */}
        <div
          onClick={() => {
            (document.body.style.overflow = "auto"), setNavFlag(false);
          }}
          className={`${
            !navFlag ? "max-md:translate-x-full" : "max-md:translate-x-0"
          } transition-all max-md:fixed max-md:bg-slate-800/80 z-50 max-md:right-0 max-md:top-0 max-md:h-screen max-md:w-full max-md:text-white  `}
        >
          <div className=" max-md:absolute max-md:right-0 max-md:p-10 hidden max-md:block ">
            <button
              onClick={() => {
                (document.body.style.overflow = "auto"), setNavFlag(false);
              }}
            >
              <IoCloseOutline size={30} className=" hover:rotate-45" />
            </button>
          </div>
          <div
            className={`${Style.NavUl} max-md:py-32 max-md:ml-32 max-md:overflow-y-scroll max-md:h-full max-md:bg-black`}
          >
            <ul
              onClick={(e) => e.stopPropagation()}
              className={` flex items-center gap-5 max-md:flex-col  `}
            >
              <li>
                <button className=" hidden max-md:block">
                  <RxAvatar size={20} />
                </button>
              </li>
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

              <li className=" group relative flex items-center gap-2 cursor-pointer ">
                <span>Call Now</span>
                <IoIosArrowDown className=" rotate-180 group-hover:rotate-0" />
                <ul className=" hidden cursor-pointer group-hover:block absolute top-5 md:bg-white md:rounded-lg md:text-black md:shadow-lg p-5">
                  <li>01700554293</li>
                  <li>01945055264</li>
                  <li>01252552525</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* middle_ends */}
        <div className=" flex items-center gap-4">
          <button>
            <CiSearch size={20} />
          </button>
          <button className=" hidden md:block">
            <RxAvatar size={20} />
          </button>
          <button>
            <GrCart size={20} />
          </button>
          <button
            onClick={() => {
              (document.body.style.overflow = "hidden"), setNavFlag(!navFlag);
            }}
            className=" hidden max-md:block"
          >
            <RxHamburgerMenu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
