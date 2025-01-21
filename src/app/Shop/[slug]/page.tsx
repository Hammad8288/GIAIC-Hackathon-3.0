// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';

// import React from 'react';
// import { FaStar } from "react-icons/fa6";
// import { FaStarHalf } from "react-icons/fa";
// import { MdFacebook } from "react-icons/md";
// import { RxLinkedinLogo } from "react-icons/rx";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { IoIosHeartEmpty } from "react-icons/io";




// // Fetch data
// async function getData(slug: string) {
//   const query = `*[_type == "product" && slug.current == $slug][0] {
//     id,name,"imageUrl": image.asset->url,
//     price,description,discountPercentage,
//     isFeaturedProduct,stockLevel,category,
//     "slug": slug.current,
//   }`;
//   const data = await client.fetch(query, { slug });
//   return data;
// }


// const ProductDetails = async ({ params }: { params: { slug: string } }) => {
//   const { slug } = params;
//   if (!slug) {
//     throw new Error("Slug is missing!");
//   }

//   // Fetch product data
//   const data = await getData(slug);

//   // Handle case where data is not found
//   if (!data) {
//     return <div className="text-center mt-20">Product not found</div>;
//   }

 


//   return (
//     <>
//       <div className="max-w-[1440px] h-auto lg:h-[820px] mx-auto px-4 lg:px-0">
//         <div className="max-w-[1241.01px] h-auto lg:h-[730.87px] m-auto mt-11 bg-white flex flex-col lg:flex-row lg:justify-between">
//           {/* Left Section */}
//           <div className="w-full lg:w-[553px] flex flex-row">
//             {/* Image Thumbnails */}
//             <div className="w-[76px] hidden lg:flex flex-col items-center ">
//               {[data.imageUrl].map((src, idx) => (
//                 <div
//                   key={idx}
//                   className="w-[60px] h-[60px] bg-[#FFF9E5] mb-4 last:mb-0"
//                 >
//                   <Image
//                     src={src}
//                     alt={`Image ${idx + 1}`}
//                     width={60}
//                     height={60}
//                     className="object-cover rounded-md"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Main Image */}
//             <div className="w-full lg:w-[481px] flex justify-center bg-white">
//               <div className="w-[90%] lg:w-[423px] h-auto rounded-md relative">
//                 <Image
//                   src={data.imageUrl}
//                   alt={data.name}  
//                   width={423}
//                   height={300}
//                   objectFit="contain"
//                   className="rounded-md"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-[606.01px] h-auto  mt-8 lg:mt-0">
//             {/* Title and Price */}
//             <div className='px-4 sm:px-0'>
//               <h1 className="text-[24px] lg:text-[42px] font-bold">{data.name}</h1>
//               <h2 className="text-[18px] lg:text-[24px]">${data.price}</h2>
//               <h2 className='text-[14px] lg:text-[20px] mt-2'>Discount Percentage:{data.discountPercentage}%</h2>
//             </div>

//             {/* Rating */}
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-14 mt-3 px-4 sm:px-0">
//               <button className="flex flex-row gap-2">
//                 <FaStar className="text-yellow-300" />
//                 <FaStar className="text-yellow-300" />
//                 <FaStar className="text-yellow-300" />
//                 <FaStar className="text-yellow-300" />
//                 <FaStarHalf className="text-yellow-300" />
//               </button>
//               <button
//                 className="border-l-2 hidden sm:block"
//                 style={{ borderColor: "#9F9F9F" }}
//               >
//                 <p className=" text-[#7F7F7F] py-2 px-4 rounded-md text-[13px]">
//                   5 Customer Reviews
//                 </p>
//               </button>
//             </div>

//             {/* Description */}
//             <div>
//               <p className="text-[16px] mt-4 text-justify px-4 sm:px-0">{data.description}</p>
//             </div>

//             {/* Divider */}
//             <hr className="w-full sm:w-[601px] border-t-[2px] border-[#dbd8d8] mt-10" />

//             {/* Additional Details */}
//             <div className="mt-9 space-y-3 px-4 sm:px-0">
//               {[
//                 ["Stock Level :", `${data.stockLevel}`],
//                 ["Category :", `${data.category}`],
//                 ["Tags :", "Sofa, Chair, Home, Shop"],
//               ].map(([label, value], idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
//                 >
//                   <p className="text-[16px] text-[#9F9F9F]">{label}</p>
//                   <p className="text-[16px] text-[#9F9F9F]">{value}</p>
//                 </div>
//               ))}
//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
//                 <p className="text-[16px] text-[#9F9F9F]">Share</p>
//                 <div className="flex flex-row gap-2 text-[23px] text-black">
//                   <MdFacebook className="cursor-pointer" />
//                   <RxLinkedinLogo className="cursor-pointer" />
//                   <AiFillTwitterCircle className="cursor-pointer" />
//                   <div className="w-32 flex justify-end text-red-600">
//                     <IoIosHeartEmpty className="cursor-pointer" />
//                   </div>
//                 </div>
//               </div>
//               <button
//                 className="px-10 py-4 mt-8 rounded-xl border-[1px] text-black border-black hover:bg-[#FBEBB5] transition-transform hover:scale-105"
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;


import { client } from "@/sanity/lib/client";
import ProductsUI from "../../ProductUIDynamic";

const ProductsPage = async ({ params }: { params: { slug: string } }) => {
  // Fetch product data from Sanity
  const query = `*[_type == "product" && slug.current == $slug][0] {
      id,name,"imageUrl": image.asset->url,
      price,description,discountPercentage,
      isFeaturedProduct,stockLevel,category,
      "slug": slug.current,
    }`;
  ;

  const productdata = await client.fetch(query, { slug: params.slug });

  // Pass the data to the Client Component
  return <ProductsUI productdata={productdata} />;
};

export default ProductsPage;