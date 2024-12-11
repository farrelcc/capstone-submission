import { Card, Carousel } from "flowbite-react";
import React from "react";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import ChildInfo from "../components/ChildInfo";
import { MdOutlineRoomService } from "react-icons/md";
import MediumCard from "../components/MediumCard";
import img1 from "../assets/slider/1.jpg";
import img2 from "../assets/slider/2.jpg";
import img3 from "../assets/slider/3.jpg";
import img4 from "../assets/slider/4.jpg";

export default function Detail() {
  return (
    <div className="p-1">
      <div className="sm:h-[80vh] h-[50vh]">
        <Carousel className="h-full">
          <img
            className="brightness-75 h-full object-cover"
            src={img1}
            alt="..."
          />
          <img
            className="brightness-75 h-full object-cover"
            src={img2}
            alt="..."
          />
          <img
            className="brightness-75 h-full object-cover"
            src={img3}
            alt="..."
          />
          <img
            className="brightness-75 h-full object-cover"
            src={img4}
            alt="..."
          />
        </Carousel>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 my-5   w-full gap-5 px-1 sm:px-10">
        {/* left */}
        <div className="col-span-2">
          {/* title */}
          <div className="w-full justify-center items-center gap-2.5 inline-flex">
            <div className="w-full  text-black text-2xl sm:text-[47px] font-semibold font-['Inter'] tracking-tight">
              Title Place
            </div>
          </div>
          {/* informasi */}
          <Card href="#" className="max-w-full my-5 hover:bg-white">
            <h5 className="sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Detail Information
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3  sm:gap-5 gap-4">
              <ChildInfo
                icon={<IoLocationOutline />}
                title={"Alamat Lengkap"}
                value={"Jl. Raya Kahayangan, Kahayangan"}
              />
              <ChildInfo
                icon={<IoTimeOutline />}
                title={"Jam Buka"}
                value={"08:00 - 17:00"}
              />
              <ChildInfo
                icon={<MdOutlineRoomService />}
                title={"Fasiltas"}
                value={"Makanan, Minuman, Pelayanan Umum"}
              />
            </div>
          </Card>
          {/* deskripsi */}
          <Card
            href="#"
            className="max-w-full hover:bg-white my-5 shadow-sm border-gray-100"
          >
            <h5 className="sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Deskripsi
            </h5>
            <p className="font-normal sm:text-base text-sm text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Card>
        </div>
        {/* right */}
        <div className="">
          {/* map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505287.4020393177!2d113.2173745713649!3d-8.346654389408785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd699e31fb22e71%3A0x3027a76e352bd10!2sJember%2C%20Kaliwates%2C%20Jember%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1733883253929!5m2!1sen!2sid"
              className="w-full"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* others */}
          <div className="mt-10">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Others
            </h5>
            <div className="grid grid-cols-1 mt-3 gap-3">
              <MediumCard />
              <MediumCard />
              <MediumCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
