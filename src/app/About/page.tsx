import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboveFooter from "../Components/AboveFooter";

const AboutPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative">
        <Image
          src="/Spic1.png"
          alt="Furniture Banner"
          width={1440}
          height={316}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image
            src="/Spic2.png"
            alt="Furniture Icon"
            width={77}
            height={77}
            className="w-[7%] md:w-[77px] md:h-[77px]"
          />
          <p className="font-medium text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[72px] lg:leading-[80px] text-black">
            About Us
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 sm:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/pic8.png" 
              alt="Furniture Showroom"
              width={500}
              height={500}
              className="rounded-md shadow-lg object-cover"
            />
          </div>

          {/* Right Section: Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to our furniture haven, where quality craftsmanship meets timeless
              design. We are dedicated to transforming your living spaces into a
              reflection of comfort, style, and functionality.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              From classic designs to modern innovations, we offer a wide range of furniture
              that caters to every taste and need. Every piece is crafted with care,
              ensuring durability and elegance for years to come.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make every home a masterpiece of beauty and practicality.
              Explore our collections and discover the perfect furniture to bring your
              vision to life.
            </p>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Crafted from the finest materials to ensure unmatched durability and beauty.
            </p>
          </div>
          <div className="text-center p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Timeless Designs
            </h3>
            <p className="text-gray-600">
              Furniture that complements any style, from modern to traditional.
            </p>
          </div>
          <div className="text-center p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sustainable Practices
            </h3>
            <p className="text-gray-600">
              Our commitment to eco-friendly materials and responsible sourcing.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Transform Your Home Today
          </h2>
          <p className="text-gray-600 mb-8">
            Browse our exclusive collection and find the perfect pieces for your space.
          </p>
          <Link href={"/Shop"} className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition">
            Explore Our Collection
          </Link>
        </div>
      </div>
      <AboveFooter />
    </div>
  );
};

export default AboutPage;
