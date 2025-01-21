// "use client";
import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import AboveFooter from "../Components/AboveFooter";
import FilterSection from "../Components/FilterSection";

const page =  () => {
  return (
    <>
      <div className="relative">
        {/* Main Background Image */}
        <div className="relative">
          <Image
            src={"/Spic1.png"}
            alt="pic1"
            width={1440}
            height={316}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <Image
              src={"/Spic2.png"}
              alt="pic2"
              width={77}
              height={77}
              className="w-[7%] md:w-[77px] md:h-[77px] "
            />
            <p className="font-[500] text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[72px] lg:leading-[80px] text-black">
              Shop
            </p>
            <div className="text-[12px] sm:text-[16px]  text-gray-600 flex items-center space-x-1">
              <p>Home</p>
              <FaChevronRight className="text-gray-800" />
              <p>Shop</p>
            </div>
          </div>
        </div>

       {/* filter senction */}

        < FilterSection />

        
      </div>
      <AboveFooter />
    </>
  );
};

export default page;
