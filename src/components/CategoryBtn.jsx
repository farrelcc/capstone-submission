import React from "react";

export default function CategoryBtn({ children }) {
  return (
    <button className="px-5 py-1.5 border-[1px] border-gray-100 text-[1rem] rounded-full font-medium bg-white text-gray-800 hover:bg-primary shadow-sm  hover:text-white w-max">
      {children}
    </button>
  );
}
