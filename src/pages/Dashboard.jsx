import { Button } from "flowbite-react";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <>
      <div className="h-[55px] w-full flex gap-4">
        <div className="w-[715px] h-full  px-2.5 py-3 bg-white rounded-[5px] shadow border border-black/10 justify-start items-center gap-5 inline-flex">
          <span className="text-3xl text-gray-300">
            <IoSearch />
          </span>
          <input
            placeholder="Search..."
            className=" outline-none text-[19px] font-normal h-full w-full"
          />
        </div>
        <button className="h-full cursor-pointer w-max shadow-md px-4 text-gray-600  text-2xl border border-black/10 rounded-md">
          <VscSettings />
        </button>
      </div>
      {/* add button */}
      <div className="flex mt-4 justify-end w-full">
        <a href="/profile/dashboard/add">
          <Button className="bg-primary shadow-md">Tambah +</Button>
        </a>
      </div>
      {/* list cards */}
      <div className="grid grid-cols-3 mt-10 gap-3">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
