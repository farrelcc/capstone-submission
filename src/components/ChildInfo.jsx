import React from "react";
import { IoLocationOutline } from "react-icons/io5";

export default function ChildInfo({ icon, title, value }) {
  return (
    <div>
      <div className="flex text-gray-500 gap-1 items-center">
        <span className="text-xs sm:text-sm">{icon}</span>
        <h3 className="sm:text-sm text-xs">{title}</h3>
      </div>
      <div className="flex text-gray-800 font-medium text-xs sm:text-sm mt-0.5 gap-1 items-center">
        <h3>{value}</h3>
      </div>
    </div>
  );
}
