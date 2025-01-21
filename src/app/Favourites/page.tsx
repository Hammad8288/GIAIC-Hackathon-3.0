// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaChevronRight } from "react-icons/fa6";
// import { useDispatch, useSelector } from "react-redux";
// import { addToFavourites, removeFromFavourites } from "@/app/redux/cartSlice";

// const Favourite = () => {
//   const dispatch = useDispatch();
//   const favourites = useSelector((state: any) => state.Favourites.items);
//   return (
//     <div>
//       <div className="relative">
//         <Image
//           src={"/Spic1.png"}
//           alt="pic1"
//           width={1440}
//           height={316}
//           className="w-full h-auto object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <Image
//             src={"/Spic2.png"}
//             alt="pic2"
//             width={77}
//             height={77}
//             className="w-[7%] md:w-[77px] md:h-[77px] "
//           />
//           <p className="font-[500] text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[72px] lg:leading-[80px] text-black">
//             Favourites
//           </p>
//           <div className="text-[12px] sm:text-[16px]  text-gray-600 flex items-center space-x-1">
//             <p>Home</p>
//             <FaChevronRight className="text-gray-800" />
//             <p>Favourites</p>
//           </div>
//         </div>
//       </div>

//       {/* Favourite section */}

//       <div className="flex-1 min-w-[300px] p-2 rounded-md">
//         <h2 className="text-[32px] font-[600] mb-9">Product</h2>

//         {favourites.map((item: any) => {
//           return (
//             <div className="mb-8 text-[16px]" key={item.id}>
//               <div className="flex justify-between mb-4">
//                 <Image
//                   src={item.imageURL}
//                   alt={item.name}
//                   width={200}
//                   height={200}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//               </div>
//               <h3 className="text-sm font-medium">{item.name}</h3>
//               <p className="text-sm font-light text-gray-500">{item.price}</p>a
//               <hr />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Favourite;
