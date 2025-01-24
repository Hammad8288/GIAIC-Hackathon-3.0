"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/app/redux/cartSlice";
import { ImBin2 } from "react-icons/im";

const Sidebar = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const cartCount = cartItems.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, type: string) => {
    dispatch(updateQuantity({ id, type }));
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <IoCartSharp className="text-[30px]" />
          {cartCount > 0 && (
            <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
              {cartCount}
            </div>
          )}
        </div>
      </SheetTrigger>

      <SheetContent className="w-[350px] sm:w-[540px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {/* Scrollable Items Section */}
        <div className="flex-1 overflow-y-auto mt-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <Image
                  width={200}
                  height={200}
                  src={item.imageURL}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 text-sm"
                >
                  <ImBin2 className=" text-base sm:text-lg md:text-xl" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Fixed Checkout Button */}
        <div className="mt-4 border-t pt-4 ">
          <button className="w-full px-4 py-2 rounded border-[1px] border-black hover:bg-[#FBEBB5] transition duration-200">
           <Link href={"/Cart"} > View Cart</Link>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
