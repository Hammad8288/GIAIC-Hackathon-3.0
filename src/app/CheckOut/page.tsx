"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import AboveFooter from "../Components/AboveFooter";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useUser } from "@clerk/nextjs";


const CheckoutPage = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const { user } = useUser();
  const userId = user?.id; // Clerk se User ID le raha hai

  const totalPrice = cartItems.reduce(
    (total: number, items: any) => total + items.price * items.quantity,
    0
  );



  // dispatch for clearing the cart items
  const dispatch = useDispatch();

  const handleCheckOut = async (items: any) => {
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("streetAddress") as HTMLInputElement).value;
    const city = (document.getElementById("city") as HTMLInputElement).value;
    const province = (document.getElementById("province") as HTMLInputElement).value;
    const zip = (document.getElementById("zip") as HTMLInputElement).value;
    const country = (document.getElementById("country") as HTMLInputElement).value;
    const products = cartItems.map((items: any) => ({
      _type : "reference",
      _ref: items._id, 
    }));

    console.log(products);
    
    const totalAmount = totalPrice;
    const orderDate = new Date().toISOString();

    if (items.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }
  
    if (paymentMethod === "COD") {
      try {
        const response = await fetch("/api/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            userId,
            email,
            phone,
            address,
            city,
            province,
            zip,
            country,
            cartItems : products,
            totalAmount,
            paymentMethod,
            orderDate,
          }),
        });

        if (!response.ok) {
          throw new Error("Order saving failed");
        }

        const data = await response.json();
        console.log("Order saved:", data);

        dispatch(clearCart());
        window.location.href = "/Success";
      } catch (error) {
        console.error("Order placement error:", error);
        alert("Failed to place order. Please try again.");
      }
    } else {
      // Stripe Payment Handling
      try {
        const response = await fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items }),
        });
        const data = await response.json();
        window.location.href = data.url;
      } catch (error) {
        console.error("Payment error:", error);
        alert("Payment failed. Please try again.");
      }
    }
  };
  return (
    <>
      {/* Hero Section */}
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
            className="w-[7%] md:w-[77px] md:h-[77px]"
          />
          <p className="font-[500] text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[72px] lg:leading-[80px] text-black">
            CheckOut
          </p>
          <div className="text-[12px] sm:text-[16px] text-gray-600 flex items-center space-x-1">
            <p>Home</p>
            <FaChevronRight className="text-gray-800" />
            <p>CheckOut</p>
          </div>
        </div>
      </div>

      {/* Billing Details */}
      <div className="flex flex-wrap gap-12 py-16 px-4 sm:px-8 md:px-16">
        {/* Left Section: Billing Details */}
        <div className="flex-1 min-w-[300px] md:min-w-[400px]">
          <h2 className="text-[32px] sm:text-[36px] font-[600] mb-6">
            Billing details
          </h2>
          <form className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-[16px] font-normal"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full border rounded-md p-4 text-[16px]"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-[16px] font-normal"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full border rounded-md p-4 text-[16px]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block mb-2 text-[16px] font-normal"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full border rounded-md p-4 text-[16px]"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-[16px] font-normal"
              >
                Country / Region
              </label>
              <input
                id="country"
                type="text"
                className="w-full border rounded-md p-4 text-[16px] bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="streetAddress"
                className="block mb-2 text-[16px] font-normal"
              >
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                className="w-full border rounded-md p-4 text-[16px]"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="city"
                  className="block mb-2 text-[16px] font-normal"
                >
                  Town / City
                </label>
                <input
                  id="city"
                  type="text"
                  className="w-full border rounded-md p-4 text-[16px]"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="province"
                  className="block mb-2 text-[16px] font-normal"
                >
                  Province
                </label>
                <input
                  id="province"
                  type="text"
                  className="w-full border rounded-md p-4 text-[16px]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="zip"
                className="block mb-2 text-[16px] font-normal"
              >
                ZIP Code
              </label>
              <input
                id="zip"
                type="text"
                className="w-full border rounded-md p-4 text-[16px]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-[16px] font-normal"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full border rounded-md p-4 text-[16px]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-[16px] font-normal"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border rounded-md p-4 text-[16px]"
              />
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block mb-2 text-[16px] font-normal"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                rows={4}
                className="w-full border rounded-md p-4 text-[16px]"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Section: Order Details */}
        <div className="flex-1 min-w-[300px] p-2 rounded-md">
          <h2 className="text-[32px] sm:text-[36px] font-[600] mb-9">
            Product
          </h2>

          {cartItems.map((item: any) => {
            return (
              <div className="mb-8 text-[16px]" key={item.id}>
                <div className="flex justify-between mb-4">
                  <Image
                    src={item.imageURL}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <p className="text-gray-400">
                    {item.name} x {item.quantity}
                  </p>
                  <p>{item.price}</p>
                </div>
                <div className="flex justify-between mb-6">
                  <p>Subtotal</p>
                  <p>{item.price * item.quantity}</p>
                </div>
                <hr />
              </div>
            );
          })}

          <div className="flex justify-between text-gray-800 font-semibold mb-6">
            <p>Total</p>
            <p className="text-[24px] font-700 text-[#B88E2F]">
              Total: ${totalPrice}
            </p>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <label className="block">
              <input
                type="radio"
                name="payment"
                className="mr-2"
                value="Online"
                checked={paymentMethod === "Online"}
                onChange={() => setPaymentMethod("Online")}
              />
              Direct Bank Transfer
            </label>
            <p className="text-[14px] text-gray-500 ml-6">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <label className="block">
              <input
                type="radio"
                name="payment"
                className="mr-2"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={() => setPaymentMethod("COD")}
              />
              Cash on Delivery
            </label>
            <p className="text-[14px] text-gray-500 ml-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold">privacy policy</span>.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="flex items-center justify-center text-center w-full sm:w-[200px] md:w-[250px] h-[40px] sm:h-[50px] md:h-[58px] rounded-lg text-base text-black border-2 border-black hover:bg-black hover:text-white mt-16 font-bold"
              onClick={() => handleCheckOut(cartItems)}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <AboveFooter />
    </>
  );
};

export default CheckoutPage;
