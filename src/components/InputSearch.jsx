import React, { useState } from "react";
import { IoLocation, IoLocationOutline, IoSearch } from "react-icons/io5";
import { useStore } from "../store/store";
import { Tooltip } from "flowbite-react";

export default function InputSearch({ setInputSearch, onSubmit }) {
  const setLocationUser = useStore((state) => state.setLocationUser);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setInputSearch(inputValue);
    if (onSubmit) onSubmit(); // Panggil fungsi onSubmit
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationUser(latitude, longitude);
          alert(`Posisi Anda sudah di Set`);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
            default:
              alert("An error occurred while fetching location.");
          }
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  return (
    <div className="flex justify-center relative -top-[35px]">
      <form
        onSubmit={handleClick}
        className="w-[90%] h-[50px] sm:h-[70px] p-2 bg-white rounded-[10px] shadow flex justify-start items-center gap-2.5"
      >
        {/* location */}
        <Tooltip content="Set Lokasi Anda">
          <button
            type="button"
            onClick={handleLocationClick}
            className="flex justify-center items-center w-max h-full px-2 sm:px-5 border-r-[1.5px] border-gray-200 text-lg sm:text-2xl"
          >
            <IoLocationOutline />
          </button>
        </Tooltip>
        <input
          onChange={(e) => setInputValue(e?.target?.value)}
          type="text"
          className="h-full w-full placeholder:text-1xl border-none outline-none focus:ring-0"
          placeholder="Search  Nama Tempat"
        />
        <button
          type="submit"
          className="h-full bg-primary text-white font-semibold rounded-md px-2 sm:px-5 text-xl sm:text-3xl"
        >
          <IoSearch />
        </button>
      </form>
    </div>
  );
}
