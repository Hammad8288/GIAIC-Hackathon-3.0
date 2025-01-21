"use client";
import React from "react";
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const navbarBgColor = pathname === "/" ? " bg-[#FBEBB5] " : "bg-white";

  return (
    <div>
      <nav
        className={`w-full h-[100px] bg-${navbarBgColor} flex sm:flex-row justify-between items-center px-4 sm:px-8 py-4`}
      >
        <button
          className="text-black sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TiThMenu />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute sm:static top-20 left-0 w-full sm:w-auto sm:flex sm:flex-1 flex-col sm:flex-row items-center text-black text-[16px] font-[500] leading-[24px] z-50 ${
            isOpen ? navbarBgColor : "bg-transparent"
          }`}
        >
          {/* Links Section */}
          <div className="flex flex-col sm:flex-1 sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 ">
            <Link
              href="/"
              className="text-black text-[14px] sm:text-[16px] leading-[24px] font-bold"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="text-black text-[14px] sm:text-[16px] font-bold leading-[24px]"
            >
              Shop
            </Link>
            <Link
              href="/About"
              className="text-black text-[14px] sm:text-[16px] font-bold leading-[24px]"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-black text-[14px] sm:text-[16px] font-bold leading-[24px]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Icons Section */}
        <div className=" flex justify-center items-center space-x-4 sm:space-x-6 text-[20px] sm:text-[24px]  sm:mt-0">
          <Link href={"/Accounts"}>
            <RiAccountCircleLine className="cursor-pointer" />
          </Link>
          <FiSearch className="cursor-pointer" />
          <Link href={"/Favourites"}>
            <FaRegHeart className="cursor-pointer" />{" "}
          </Link>
          <SideBar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
