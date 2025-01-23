"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourites } from "@/app/redux/favouriteSlice";
import { toast } from "sonner";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import AboveFooter from "../Components/AboveFooter";

const FavouritesPage = () => {
  const dispatch = useDispatch();

  // Get favourite items from Redux store
  const favourites = useSelector((state: any) => state.favourites.items);

  // Remove item from favourites
  const handleRemoveFromFavourites = (id: string) => {
    dispatch(removeFromFavourites(id));
    toast.success("Product removed from favourites");
  };

  return (
    <>
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
          <p className="font-medium text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[72px] lg:leading-[80px] text-black">
            Favourites
          </p>
          <div className="text-[12px] sm:text-[16px] text-gray-600 flex items-center space-x-1">
            <p>Home</p>
            <FaChevronRight className="text-gray-800" />
            <p>Favourite</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 sm:px-8">
        <h1 className="text-2xl font-bold text-center mb-8">Your Favourites</h1>

        {favourites.length === 0 ? (
          <p className="text-center text-gray-500">
            No favourite products yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favourites.map((item: any) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] mb-4 relative">
                  <Image
                    src={item.imageURL}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold truncate">
                  {item.name}
                </h2>
                <p className="text-base sm:text-lg text-green-500">
                  ${item.price}
                </p>

                {/* Favourite Icon and Remove Button */}
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleRemoveFromFavourites(item.id)}
                    className="text-sm sm:text-base text-red-500 hover:text-red-700 transition"
                  >
                    Remove from Favourites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <AboveFooter />
    </>
  );
};

export default FavouritesPage;
