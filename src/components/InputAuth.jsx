import React from "react";

export default function InputAuth({ type, placeholder, height }) {
  return (
    <input
      type={type}
      className={`h-${height} w-full rounded-lg text-2xl px-5 bg-gray-50 border-gray-300 shadow-md`}
      placeholder={placeholder}
    />
  );
}
