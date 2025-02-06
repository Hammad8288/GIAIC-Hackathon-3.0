"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const SuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <div className="text-center p-10 bg-white rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <Image
          src="/thank-you.jpg"
          alt="Success"
          width={200}
          height={200}
          className="mx-auto mb-6 animate-bounce"
        />
        <h1 className="text-3xl font-extrabold mb-4 text-black">
          Order Placed Successfully! 🎉
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Thank you for shopping with us. Your order has been placed successfully. We'll get your items to you as soon as possible!
        </p>
        
        <div className="mb-6 flex items-center justify-center">
          <Link href="/">
            <button className="flex items-center justify-center bg-black text-white py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5 hover:shadow-xl">
              <FaHome className="mr-2" />
              Go to Home
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          Have a question or need help? <a href="mailto:hammad82887@gmail.com" className="font-semibold text-indigo-400">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
