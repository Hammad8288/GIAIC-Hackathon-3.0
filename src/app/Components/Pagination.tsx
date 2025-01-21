import React from "react";

const Pagination = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button className="px-4 py-2 bg-[#FBEBB5] rounded-md hover:bg-[#FBEBB5]">
          1
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-[#FBEBB5]">
          2
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-[#FBEBB5]">
          3
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-[#FBEBB5]">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
