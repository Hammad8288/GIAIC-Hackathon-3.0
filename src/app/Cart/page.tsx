"use client";
import React from "react";
import Image from "next/image";
import { ImBin2 } from "react-icons/im";
import AboveFooter from "../Components/AboveFooter";
import { FaChevronRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "@/app/redux/cartSlice";
import { useClerk, useUser } from "@clerk/nextjs";

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
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const handleCheckoutClick = () => {
    if (isSignedIn) {
      // Navigate to checkout page
      window.location.href = "/CheckOut";
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
      <div className="max-w-[1440px] h-auto bg-white flex justify-center items-center px-4 py-6">
        {/* Main container */}
        <div className="w-full max-w-[1240px] flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] rounded-md p-4">
            {/* Header Section */}
            <div className="w-full py-3 bg-[#FFF9E5] rounded-md px-4 sm:px-8">
              <ul className="grid grid-cols-4 text-center">
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
            <div className="flex flex-col gap-4 mt-4 bg-white">
              {cartItems.length > 0 ? (
                <div className="max-h-[350px] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {cartItems.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-center gap-4 w-full p-2 border-b"
                    >
                      {/* Product Image */}
                      <div className="w-[80px] h-[80px] rounded-lg flex items-center justify-center">
                        <Image
                          src={item.imageURL}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-row justify-between items-center w-full gap-2 text-center sm:text-left">
                        <p className="text-[14px] text-[#9F9F9F]">
                          {item.name}
                        </p>
                        <p className="text-[14px] text-[#9F9F9F]">
                          ${item.price}
                        </p>

                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, "decrease")
                            }
                            className="px-2 py-1 bg-gray-200 rounded"
                          >
                            -
                          </button>
                          <p className="text-sm text-gray-500">
                            {item.quantity}
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

                        <p className="text-[14px] text-[#9F9F9F]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      <button onClick={() => handleRemove(item.id)}>
                        <ImBin2 className="text-[#f5e09d] text-lg cursor-pointer" />
                      </button>
                      </div>

                      {/* Delete Button */}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[16px] text-[#9F9F9F]">
                  No items in the cart.
                </p>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[35%] bg-[#FFF9E5] rounded-md p-4">
            <h1 className="text-[20px] sm:text-[24px] text-black text-center">
              Cart Totals
            </h1>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between">
                <h2 className="text-[14px]">Subtotal</h2>
                <h2 className="text-[14px] text-[#9F9F9F]">
                  ${totalPrice.toFixed(2)}
                </h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-[14px]">Total</h2>
                <h2 className="text-[14px] text-[#9F9F9F]">
                  ${totalPrice.toFixed(2)}
                </h2>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleCheckoutClick}
                  className="w-full sm:w-[200px] h-[50px] rounded-lg text-sm text-black border-2 border-black hover:bg-black hover:text-white"
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
