"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TopPicks from "./Components/TopPicks";

const Home = () => {
  // const [topPicksData, setTopPicksData] = useState();
  const [topPicksData, setTopPicksData] = useState<JSX.Element | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await TopPicks();
      setTopPicksData(res);
    }
    fetchData();
  }, [topPicksData]);


  const products2 = [
    {
      id: 5,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "/pic9.png",
    },
    {
      id: 6,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "/pic10.png",
    },
    {
      id: 7,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "/pic11.png",
    },
  ];

  return (
    <div>
      <div className="bg-[#FBEBB5] w-full h-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:px-20">
          {/* Text Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left lg:w-1/2 lg:mt-20">
            <p className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] mt-10 sm:mt-16 md:mt-20 font-[500] leading-[36px] sm:leading-[48px] md:leading-[64px] lg:leading-[86px]">
              Rocket single seater
            </p>
            <Link
              href="/Shop"
              className="mt-4 text-[16px] sm:text-[20px] md:text-[24px] font-[500] leading-[24px] sm:leading-[28px] md:leading-[36px] transition-transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <Image
              src="/pic1.png"
              alt="Hero Image"
              width={803}
              height={1000}
              className="w-[90%] sm:w-[70%] sm:h[70%] md:w-[60%] lg:w-[80%] xl:w-[70%] object-contain max-w-[600px]"
            />
          </div>
        </div>
      </div>

      {/* view more section */}

      <div className="w-full h-auto bg-[#FAF4F4] py-10">
        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 max-w-7xl mx-auto px-4 lg:px-8 ">
          {/* First Image Section */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/pic2.png"
              alt="Side Table 1"
              width={605}
              height={562}
              className="w-full mr-10 max-w-[80%] sm:max-w-full cursor-pointer transition-transform hover:scale-105"
            />
            <div className="mt-4  lg:mt-6 text-center lg:text-left">
              <p className="font-[500] text-[24px] lg:text-[36px] leading-[36px] lg:leading-[54px]">
                Side Table
              </p>
              <Link
                href={"/Shop"}
                className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] lg:text-[18px] transition-transform hover:scale-105 hover:text-gray-700"
              >
                View More
              </Link>
            </div>
          </div>

          {/* Second Image Section */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/pic3.png"
              alt="Side Table 2"
              width={605}
              height={562}
              className="w-full mr-14 max-w-[80%] sm:max-w-full cursor-pointer transition-transform hover:scale-105"
            />
            <div className="mt-4 lg:mt-6 text-center lg:text-left">
              <p className="font-[500] text-[24px] lg:text-[36px] leading-[36px] lg:leading-[54px]">
                Side Table
              </p>
              <Link
                href={"/Shop"}
                className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] lg:text-[18px] transition-transform hover:scale-105 hover:text-gray-700"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top picks */}

      {topPicksData} 

      {/* new arrivals */}

      <div className="bg-[#FFF9E5] w-full h-auto py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={"/pic8.png"}
              alt="pic8"
              width={983}
              height={799}
              className="w-full  object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center sm:pt-32 mt-6 lg:px-10">
            <div className="mb-6">
              <p className="font-[500] text-[24px] leading-[36px]">
                New Arrivals
              </p>
              <p className="font-[700] text-[36px] md:text-[48px] leading-[48px] md:leading-[72px]">
                Asgaard Sofa
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/Shop"
                className="text-[16px] md:text-[20px] leading-[28px] font-[500] text-[#000000] border border-[#9b9b9b] py-3 px-6 inline-block hover:bg-[#faeec7] transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* our blog  */}

      <div className="w-full h-auto bg-white py-12">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center px-4">
          <p className="font-medium text-[28px] sm:text-[36px] md:text-[40px] leading-[36px] sm:leading-[54px]">
            Our Blogs
          </p>
          <p className="text-gray-500 font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mt-4 max-w-2xl">
            Find a bright idea to suit your taste with our great selection.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="flex justify-center items-center">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-8 max-w-7xl">
            {products2.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  width={300}
                  height={250}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] sm:h-[250px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Posts */}
        <div className="flex justify-center mt-12">
          <Link
            href={"/Blog"}
            className="underline underline-offset-8 cursor-pointer font-medium text-[16px] sm:text-[20px] transition-transform hover:scale-105 hover:text-gray-700"
          >
            View All Posts
          </Link>
        </div>
      </div>

      {/* contact to instagram   */}

      <div className="relative w-full h-auto">
        {/* Image Section */}
        <div className="w-full h-[450px]">
          <Image
            src={"/pic12.png"}
            alt="pic12"
            width={1440}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="font-bold text-[40px] md:text-[60px] leading-[50px] md:leading-[90px]">
              Our Instagram
            </p>
            <p className="font-[400] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px]">
              Follow our store on Instagram
            </p>
          </div>
          <div>
            <button className="w-[200px] h-[50px] md:w-[255px] md:h-[64px] rounded-full bg-white transition-transform hover:scale-105 text-black font-[500] text-[16px] md:text-[20px] drop-shadow-lg">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
