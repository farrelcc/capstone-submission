import React from "react";
import Head from "./Head";
import hero from "../assets/thumbnail.jpg";
export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
      }}
      className=" bg-cover bg-center sm:h-[80vh]  h-[60vh]  overflow-hidden
      "
    >
      <Head />
    </div>
  );
}
