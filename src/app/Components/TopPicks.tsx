import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const TopPicks = async () => {
  const query = `*[_type == "product" && isFeaturedProduct == true ] {
     id,name,"imageUrl": image.asset->url,
    price,description,discountPercentage,
    isFeaturedProduct,stockLevel,category,
    "slug": slug.current
}`;

  const topPicks = await client.fetch(query);

  return (
    <div>
      <div className="w-full h-auto bg-white py-12">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center px-4 lg:px-8">
          <p className="font-[500] text-[28px] sm:text-[36px] lg:text-[48px] leading-[40px] sm:leading-[54px] lg:leading-[60px]">
            Top Picks For You
          </p>
          <p className="font-[500] text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#9F9F9F] mt-5 max-w-2xl">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 lg:px-12 max-w-7xl">
            {topPicks.map((product: any) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  width={300}
                  height={200}
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 lg:h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
                    ${product.price}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
                    Discount: {product.discountPercentage}%
                  </p>
                  <Link href={`/Shop/${product.slug}`}>
                    <button className="bg-slate-300 px-4 py-2 rounded-md mt-5">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Section */}
        <div className="flex justify-center mt-16 lg:mt-28">
          <Link
            href={"/Shop"}
            className="underline underline-offset-8 cursor-pointer font-[500] text-[14px] sm:text-[16px] lg:text-[18px] transition-transform hover:scale-105 hover:text-gray-700"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
