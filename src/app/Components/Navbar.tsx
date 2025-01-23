"use client";
import React from "react";
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  // Set background color of navbar based on pathname
  const navbarBgColor = pathname === "/" ? " bg-[#FBEBB5] " : "bg-white";

  // Get favourite items from Redux store
  const favourites = useSelector((state: any) => state.favourites.items);
  const FavouriteCount = favourites.length;

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
          
          {/* Account */}
          <Link href={"/Accounts"}>
            <RiAccountCircleLine className="cursor-pointer" />
          </Link>
          <FiSearch className="cursor-pointer" />

          {/* Favourites */}
          <Link href={"/Favourites"}>
            <div className="relative">
              <FaRegHeart className="text-[25px]" />
              {FavouriteCount > 0 && (
                <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {FavouriteCount}
                </div>
              )}
            </div>
          </Link>

          {/* Sidebar Toggle */}
          <SideBar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
