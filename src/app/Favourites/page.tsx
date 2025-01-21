"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourites } from "@/app/redux/favouriteSlice";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { toast } from "sonner";
import Image from "next/image";

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
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold text-center mb-8">Your Favourites</h1>

      {favourites.length === 0 ? (
        <p className="text-center text-gray-500">No favourite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favourites.map((item: any) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg">
              <div className="w-full h-[200px] mb-4 relative">
                <Image
                  src={item.imageURL}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-cover rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-lg text-green-500">${item.price}</p>

              {/* Favourite Icon and Remove Button */}
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleRemoveFromFavourites(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Remove from Favourites
                </button>
                <IoIosHeart
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleRemoveFromFavourites(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
