"use client";
import React, { useState, useEffect } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { SignOutButton, useClerk } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const pathname = usePathname();
  // Set background color of navbar based on pathname
  const navbarBgColor = pathname === "/" ? " bg-[#FBEBB5] " : "bg-white";

  // Clerk setup
  const { redirectToSignIn } = useClerk();
   // Function to handle icon click and redirect to Clerk's login page
   const handleIconClick = () => {
    redirectToSignIn();
  };

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        id, name, "imageUrl": image.asset->url, price, "slug": slug.current, discountPercentage
      }`;
      const products = await client.fetch(query);
      setAllProducts(products);
      setFilteredProducts(products);
    };
    fetchProducts();
  }, []);

  // Search handling
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product: any) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  };

  // Get favourites count
  const favourites = useSelector((state: any) => state.favourites.items);
  const FavouriteCount = favourites.length;


  return (
    <div>
      <nav
        className={`w-full h-[100px] bg-${navbarBgColor} flex sm:flex-row justify-between items-center px-4 sm:px-8 py-4`}
      >
        {/* Mobile Menu Button */}
        <button
          className="text-black sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <TiThMenu className="text-2xl" />
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute sm:static top-20 left-0 w-full sm:w-auto sm:flex sm:flex-1 flex-col sm:flex-row items-center text-black text-[16px] font-[500] leading-[24px] z-50 ${
            isMenuOpen ? navbarBgColor : "bg-transparent"
          }`}
        >
          {/* Links Section */}
          <div className="flex flex-col sm:flex-1 sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 ">
            <Link
              href="/"
              className="text-black text-[14px] sm:text-[16px] leading-[24px] font-bold"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="text-black text-[14px] sm:text-[16px] font-bold leading-[24px]"
            >
              Shop
            </Link>
            <Link
              href="/About"
              className="text-black text-[14px] sm:text-[16px] font-bold leading-[24px]"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-black text-[14px] sm:text-[16px] font-bold leading-[24px]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-4 text-[25px] items-center">
          <SignedOut>
            <RiAccountCircleLine className="cursor-pointer" onClick={handleIconClick} />
          </SignedOut>

          {/* User Button */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* Search Icon */}
          <div>
            <FiSearch
              className="cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>

          {/* Favourites */}
          <Link href={"/Favourites"}>
            <div className="relative">
              <FaRegHeart className="text-[25px]" />
              {FavouriteCount > 0 && (
                <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {FavouriteCount}
                </div>
              )}
            </div>
          </Link>

          <SideBar />
        </div>
      </nav>

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600 text-xl"
              onClick={() => setIsSearchOpen(false)}
            >
              x
            </button>
            <h2 className="text-lg font-bold mb-4">Search Products</h2>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-3 border rounded-md focus:outline-none"
            />
            <div className="max-h-64 overflow-y-auto mt-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product: any) => (
                  <Link
                    href={`/Shop/${product.slug}`}
                    key={product.id}
                    className="flex items-center p-4 border-b hover:bg-gray-100"
                  >
                    <Image
                      width={64}
                      height={64}
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-bold">{product.name}</p>
                      <p className="text-sm text-gray-600">Price: ${product.price}</p>
                      <p className="text-sm text-gray-600">Discounted Percentage: {product.discountPercentage}%</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500">No products found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
