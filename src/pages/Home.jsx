import React from "react";
import Hero from "../components/Hero";
import InputSearch from "../components/InputSearch";
import CategoryBtn from "../components/CategoryBtn";
import Card from "../components/Card";
import { Footers } from "../components/Footers";

export default function Home() {
  return (
    <div className="pb-32">
      {/* hero */}
      <Hero />
      {/* search */}
      <InputSearch />
      {/* category buttons */}
      <div className=" flex gap-5 w-[90%] mx-auto ">
        <CategoryBtn>All</CategoryBtn>
        <CategoryBtn>Populer 🔥</CategoryBtn>
        <CategoryBtn>Makanan 🍕</CategoryBtn>
        <CategoryBtn> Hiburan 🌄</CategoryBtn>
        <CategoryBtn>UMKM</CategoryBtn>
        <CategoryBtn>Pelayanan Umum</CategoryBtn>
        <CategoryBtn>Pelayanan Umum</CategoryBtn>
      </div>
      {/* cards */}
      <div className="grid  xl:grid-cols-3 mx-auto  lg:grid-cols-2 gap-10 w-[90%] mt-9">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
