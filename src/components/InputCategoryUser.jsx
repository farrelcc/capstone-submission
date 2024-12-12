import React, { useState } from "react";
import { useStore } from "../store/store";
import { TextInput } from "flowbite-react";
import InputForm from "./InputForm";

const InputCategoryUser = () => {
  const dataUser = useStore((state) => state.dataUser);
  const setDataUser = useStore((state) => state.setDataUser);

  const [formData, setFormData] = useState({ ...dataUser });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataUser(formData);
    console.log("Updated Data: ", formData); // Hanya untuk debugging
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] mx-auto  gap-3 p-5 my-0 bg-gray-50  rounded-md shadow-sm space-y-4"
    >
      <div>
        <h2 className="font-semibold text-gray-600 text-lg sm:text-xl">
          Temukan Tempat yang Anda Inginkan
        </h2>
        <p className="sm:text-sm text-xs text-gray-500">
          Masukkan rating dan jangkauan radius untuk mendapatkan rekomendasi
          terbaik di sekitar Anda.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          "bahari",
          "budaya",
          "cagar",
          "pusat",
          "taman",
          "ibadah",
          "radius",
        ].map((field) => (
          <div key={field} className="flex flex-col">
            <InputForm
              type="number"
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              step="0.1"
              max={field === "radius" ? 100 : 5}
              min="0"
            />
            {/* <input
              type="number"
              id={field}
              name={field}
              max={5}
              value={formData[field]}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 mt-1"
              step="0.1"
              min="0"
            /> */}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          simpan
        </button>
      </div>
    </form>
  );
};

export default InputCategoryUser;
