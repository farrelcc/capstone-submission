import React from "react";
import { IoLocationOutline } from "react-icons/io5";

export default function MediumCard() {
  return (
    <div className="w-full border-[1.5px] border-gray-100 p-2.5 rounded-md shadow-md h-32  overflow-hidden flex gap-2">
      {/* img */}
      <div className="w-[40%] rounded-md overflow-hidden h-full flex-shrink-0">
        <img
          src="https://i.pinimg.com/736x/65/de/77/65de774d0af2da180e5ccea1d7fa0d90.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex overflow-hidden flex-col justify-between">
        <div>
          {/* title */}
          <div className="font-semibold">
            <h2>Lorem ipsum dolor sit amet</h2>
          </div>
          {/* desc */}
          <div className="text-xs text-gray-600 mt-1 overflow-hidden">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              maxime incidunt aperiam...
            </p>
          </div>
        </div>
        {/* info */}
        <div className="flex text-[0.7rem] mt-1.5 text-gray-500 gap-1 items-center">
          <span>
            <IoLocationOutline />
          </span>
          <h3 className="">{"Bali, Indonesia"}</h3>
        </div>
      </div>
    </div>
  );
}
