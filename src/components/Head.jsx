import { Avatar, Dropdown } from "flowbite-react";
import React from "react";

export default function Head({ auth = true }) {
  return (
    <div
      className="w-full  flex items-center justify-between px-3 sm:px-5 h-[70px] 
        "
    >
      <div className=" relative uppercase font-bold text-lg sm:text-2xl text-white">
        Bumi Aveshana
      </div>
      <Dropdown
        label=""
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="cursor-pointer">
            <Avatar
              size="sm"
              img="https://tse4.mm.bing.net/th?id=OIP.Y0wVP5QF-JzPtas49on1HAHaHa&pid=Api&P=0&h=180"
              alt="avatar of Jese"
              rounded
            />
          </div>
        )}
      >
        {auth ? (
          <>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </>
        ) : (
          <Dropdown.Item>Sign in</Dropdown.Item>
        )}
      </Dropdown>
    </div>
  );
}
