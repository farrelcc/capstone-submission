import React from "react";
import { IoLocation, IoLocationOutline, IoSearch } from "react-icons/io5";

export default function InputSearch() {
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude, "Longitude:", longitude);
          alert(
            `Your location is Latitude: ${latitude}, Longitude: ${longitude}`
          );
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
      <div className="w-[90%] h-[70px] p-2 bg-white rounded-[10px] shadow flex justify-start items-center gap-2.5">
        {/* location */}
        <button
          onClick={handleLocationClick}
          className="flex justify-center items-center w-max h-full px-5 border-r-[1.5px] border-gray-200 text-2xl"
        >
          <IoLocationOutline />
        </button>
        <input
          type="text"
          className="h-full w-full text-1xl placeholder:text-1xl border-none outline-none focus:ring-0"
          placeholder="Search  UMKM , Tempat Makan, Pelayanan Umum...."
        />
        <button className="h-full bg-primary text-white font-semibold rounded-md px-5 text-3xl">
          <IoSearch />
        </button>
      </div>
    </div>
  );
}
