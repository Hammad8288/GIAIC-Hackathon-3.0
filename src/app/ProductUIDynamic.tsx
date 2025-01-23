"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import AboveFooter from "./Components/AboveFooter";
import { toast } from "sonner";
import { addToFavourites, removeFromFavourites } from "./redux/favouriteSlice";
import { RootState } from "./redux/store";

const ProductsUI = ({ productdata }: { productdata: any }) => {
  const dispatch = useDispatch();

  // Get favorites from Redux state
  const favorites = useSelector((state: RootState) => state.favourites.items);

  // Check if the product is in favorites
  const isFavourite = favorites.some((item) => item.id === productdata.id);

  // Handle Add/Remove to/from Favorites
  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(productdata.id));
      toast.success("Removed from favorites");
    } else {
      dispatch(
        addToFavourites({
          id: productdata.id,
          name: productdata.name,
          price: productdata.price,
          imageURL: productdata.imageUrl,
        })
      );
      toast.success("Added to favorites");
    }
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    toast.success("Product added to cart");
    dispatch(
      addToCart({
        id: productdata.id,
        name: productdata.name,
        price: productdata.price,
        imageURL: productdata.imageUrl,
        quantity: 1,
      })
    );
  };

  // Handle missing product data
  if (!productdata) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <p className="text-gray-600">The requested product does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-[1440px] h-auto lg:h-[820px] mx-auto px-4 lg:px-0">
        <div className="max-w-[1241.01px] h-auto lg:h-[730.87px] m-auto mt-11 bg-white flex flex-col lg:flex-row lg:justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-[553px] flex flex-row">
            {/* Image Thumbnails */}
            <div className="w-[76px] hidden lg:flex flex-col items-center ">
              {[productdata.imageUrl].map((src, idx) => (
                <div
                  key={productdata.id}
                  className="w-[60px] h-[60px] bg-[#FFF9E5] mb-4 last:mb-0"
                >
                  <Image
                    src={src}
                    alt={`Image ${idx + 1}`}
                    width={60}
                    height={60}
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="w-full lg:w-[481px] flex justify-center bg-white">
              <div className="w-[90%] lg:w-[423px] h-auto rounded-md relative">
                <Image
                  src={productdata.imageUrl}
                  alt={productdata.name}
                  width={423}
                  height={300}
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-[606.01px] h-auto mt-8 lg:mt-0">
            {/* Title and Price */}
            <div className="px-4 sm:px-0">
              <h1 className="text-[24px] lg:text-[42px] font-bold">
                {productdata.name}
              </h1>
              <h2 className="text-[18px] lg:text-[24px]">
                ${productdata.price}
              </h2>
              <h2 className="text-[14px] lg:text-[20px] mt-2">
                Discount Percentage : {productdata.discountPercentage}%
              </h2>
            </div>
            {/* Rating */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-14 mt-3 px-4 sm:px-0">
              <button className="flex flex-row gap-2">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStarHalf className="text-yellow-300" />
              </button>
              <button
                className="border-l-2 hidden sm:block"
                style={{ borderColor: "#9F9F9F" }}
              >
                <p className=" text-[#7F7F7F] py-2 px-4 rounded-md text-[13px]">
                  5 Customer Reviews
                </p>
              </button>
            </div>
            {/* Description */}
            <div>
              <p className="text-[16px] mt-4 text-justify px-4 sm:px-0">
                {productdata.description}
              </p>
            </div>
            {/* Divider */}
            <hr className="w-full sm:w-[601px] border-t-[2px] border-[#dbd8d8] mt-10" />
            {/* Additional Details */}
            <div className="mt-9 space-y-3 px-4 sm:px-0">
              {[
                ["Stock Level :", `${productdata.stockLevel}`],
                ["Category :", `${productdata.category}`],
                ["Tags :", "Sofa, Chair, Home, Shop"],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
                >
                  <p className="text-[16px] text-[#9F9F9F]">{label}</p>
                  <p className="text-[16px] text-[#9F9F9F]">{value}</p>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <p className="text-[16px] text-[#9F9F9F]">Share</p>
                <div className="flex flex-row gap-2 text-[23px] text-black">
                  <MdFacebook className="cursor-pointer" />
                  <RxLinkedinLogo className="cursor-pointer" />
                  <AiFillTwitterCircle className="cursor-pointer" />
                  <div
                    className={`w-32 font-bold flex justify-center ${
                      isFavourite ? "text-red-600" : "text-gray-600"
                    }`}
                  >
                    {isFavourite ? (
                      <IoIosHeart
                        className="cursor-pointer"
                        onClick={toggleFavourite}
                      />
                    ) : (
                      <IoIosHeartEmpty
                        className="cursor-pointer"
                        onClick={toggleFavourite}
                      />
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-10 py-4 mt-8 rounded-xl border-[1px] text-black border-black hover:bg-[#FBEBB5] transition-transform hover:scale-105"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboveFooter />
    </>
  );
};

export default ProductsUI;
