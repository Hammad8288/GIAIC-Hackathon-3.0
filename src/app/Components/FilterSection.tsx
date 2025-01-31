
//1.  Imports and Initial Setup
"use client";

import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoFilter } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,  
} from "@/components/ui/dropdown-menu";


// 2. Component State Management
const FilterSection = () => {
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [products, setProducts] = useState([]); // Store filtered products
  const [filter, setFilter] = useState<string>("All"); // Store selected filter
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 9; // Set how many items per page

 
  // 3. Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        id, name, "imageUrl": image.asset->url,
        price, description, discountPercentage,
        isFeaturedProduct, stockLevel, category,
        "slug": slug.current
      }`;
      const fetchedProducts = await client.fetch(query);
      setAllProducts(fetchedProducts);
      setProducts(fetchedProducts); // Show all products by default
    };
    fetchProducts();
  }, []);


  // 4. Function to filter products based on the category
  const handleFilterChange = (category: string) => {
    setFilter(category);
    setCurrentPage(1); // Reset to first page on filter change

    if (category === "All") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product: any) => product.category === category
      );
      setProducts(filtered);
    }
  };

  // 5. Pagination Logic
  const indexOfLastProduct = currentPage * itemsPerPage; 
  // If currentPage = 2 and itemsPerPage = 9, then:indexOfLastProduct=2×9=18

  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  // Continuing from the above, indexOfFirstProduct=18−9=9
  
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Generate page numbers dynamically
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="w-full bg-[#FAF4F4] mt-8 p-4">
        <div className="flex flex-wrap justify-around items-center gap-4 lg:gap-8">
          {/* Filters Section */}
          <div className="flex items-center space-x-4 lg:space-x-5">
            <div className="flex items-center space-x-3">
              <IoFilter className="w-5 h-5 md:w-[25px] md:h-[25px] cursor-pointer" />
              <DropdownMenu>
                <DropdownMenuTrigger>Filters</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Search by filters</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleFilterChange("All")}>
                    All
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleFilterChange("Bed")}>
                    Beds
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleFilterChange("Chair")}>
                    Chairs
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleFilterChange("Sofa")}>
                    Sofas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleFilterChange("Table")}>
                    Tables
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block border border-[#9F9F9F] h-[40px]"></div>

          {/* Showing Results */}
          <p className="text-sm md:text-base font-[400] text-black">
            Showing {currentProducts.length} results for {filter}
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product: any) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-500 transform hover:scale-105"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-100 h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2"> ${product.price}</p>
                  <p className="text-gray-600 mt-2">
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

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-5">
              {/* Previous Page Icon */}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="disabled:opacity-50"
              >
                <FaArrowLeft className="w-6 h-6 text-gray-600 cursor-pointer" />
              </button>

              {/* Page Numbers */}
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded-md ${
                    number === currentPage
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {number}
                </button>
              ))}

              {/* Next Page Icon */}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === pageNumbers.length}
                className="disabled:opacity-50"
              >
                <FaArrowRight className="w-6 h-6 text-gray-600 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
