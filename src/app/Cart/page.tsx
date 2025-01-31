"use client";
import React from "react";
import Image from "next/image";
import { ImBin2 } from "react-icons/im";
import AboveFooter from "../Components/AboveFooter";
import { FaChevronRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "@/app/redux/cartSlice";
import { useClerk, useUser  } from '@clerk/nextjs';


const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );

  // handle quantity change and remove item from cart
  const handleQuantityChange = (id: string, type: string) => {
    dispatch(updateQuantity({ id, type }));
  };

  
  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };


  // user authentication
  const { isSignedIn } = useUser()
  const { openSignIn } = useClerk(); 
  const handleCheckoutClick = () => {
    if (isSignedIn) {
      // Navigate to checkout page
      window.location.href = '/CheckOut';
    } else {
      openSignIn();
    } 
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
          <p className="font-[500] text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[72px] lg:leading-[80px] text-black">
            Cart
          </p>
          <div className="text-[12px] sm:text-[16px]  text-gray-600 flex items-center space-x-1">
            <p>Home</p>
            <FaChevronRight className="text-gray-800" />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] h-[525px] bg-white flex justify-center items-center px-4 py-6">
        {/* Main container */}
        <div className="w-full md:w-[1240px] flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] rounded-md p-4">
            {/* Header Section */}
            <div className="w-full py-3 bg-[#FFF9E5] rounded-md px-4 sm:px-8">
              <ul className="flex flex-wrap sm:flex-nowrap justify-between">
                <li className="text-[14px] sm:text-[16px] font-semibold">
                  Product
                </li>
                <li className="text-[14px] sm:text-[16px] font-semibold">
                  Price
                </li>
                <li className="text-[14px] sm:text-[16px] font-semibold">
                  Quantity
                </li>
                <li className="text-[14px] sm:text-[16px] font-semibold">
                  Subtotal
                </li>
              </ul>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-nowrap gap-3 sm:gap-6 mt-4 justify-center items-center bg-white">
              {/* Ensure cartItems exists */}
              {cartItems.length > 0 ? (
                <div className="max-h-[350px] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {cartItems.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 w-full"
                    >
                      {/* Product Image */}
                      <div className="w-[106px] h-[106px] rounded-lg flex items-center justify-center">
                        <Image
                          src={item.imageURL}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-20 h-20 object-cover rounded"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-col md:flex-row md:justify-around gap-4 w-full items-center">
                        <ul className="flex flex-col items-center md:flex-row justify-between w-full gap-2">
                          <li className="text-[12px] sm:text-[14px] md:text-[16px] text-[#9F9F9F]">
                            {item.name}
                          </li>
                          <li className="text-[12px] sm:text-[14px] md:text-[16px] text-[#9F9F9F]">
                            ${item.price}
                          </li>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "decrease")
                              }
                              className="px-2 py-1 bg-gray-200 rounded"
                            >
                              -
                            </button>
                            <p className="text-sm text-gray-500">
                              Quantity: {item.quantity}
                            </p>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "increase")
                              }
                              className="px-2 py-1 bg-gray-200 rounded"
                            >
                              +
                            </button>
                          </div>
                          <li className="text-[12px] sm:text-[14px] md:text-[16px] text-[#9F9F9F]">
                            SubTotal : <br /> $ {totalPrice.toFixed(2)}
                          </li>
                        </ul>
                        {/* Trash Icon */}
                        <button
                          className="mt-2 sm:mt-0"
                          onClick={() => handleRemove(item.id)}
                        >
                          <ImBin2 className="text-[#f5e09d] text-base sm:text-lg md:text-xl cursor-pointer" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[16px] text-[#9F9F9F] w-full">
                  No items in the cart.
                </p>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[35%] bg-[#FFF9E5] rounded-md p-4">
            {/* Title Section */}
            <h1 className="text-[20px] sm:text-[24px] md:text-[28px] text-black text-center">
              Cart Totals
            </h1>

            {/* Content Section */}
            <div className="flex flex-col gap-4 sm:gap-6 mt-4">
              {/* Subtotal */}
              <div className="flex justify-between">
                <h2 className="text-[14px] sm:text-[16px]">Subtotal</h2>
                <h2 className="text-[14px] sm:text-[16px] text-[#9F9F9F]">
                  ${totalPrice.toFixed(2)}
                </h2>
              </div>

              {/* Total */}
              <div className="flex justify-between">
                <h2 className="text-[14px] sm:text-[16px]">Total</h2>
                <h2 className="text-[14px] sm:text-[16px] text-[#9F9F9F]">
                  ${totalPrice.toFixed(2)}
                </h2>
              </div>

              {/* Checkout Button */}
              <div className="flex justify-center mt-4">
                <button 
                  onClick={handleCheckoutClick}
                  className="flex items-center justify-center text-center w-full sm:w-[200px] md:w-[250px] h-[40px] sm:h-[50px] md:h-[58px] rounded-lg text-sm text-black border-2 border-black hover:bg-black hover:text-white"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboveFooter />
    </>
  );
};
export default Cart;
