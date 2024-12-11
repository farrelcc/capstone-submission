import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router";

export default function Setting() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check active route
  const isActive = (path) => location.pathname == path;

  return (
    <div>
      <Navbar fluid rounded className="shadow-md">
        <Navbar.Brand href="/">
          {/* <img src="" className="mr-3 h-6 sm:h-9" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Bumi Aveshana
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item href="/">Home</Dropdown.Item>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="/profile/dashboard">Dashboard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
      <div className="sm:p-5 p-2 flex-col">
        <div className="flex gap-4">
          {/* Tab Profile */}
          <div
            onClick={() => navigate("/profile")}
            className={`flex items-center gap-2 cursor-pointer p-2 text-gray-500 hover:text-gray-900 border-b-2 ${
              isActive("/profile")
                ? "text-primary border-primary"
                : "border-transparent"
            }`}
          >
            <HiUserCircle size={20} />
            <span>Profile</span>
          </div>

          {/* Tab Dashboard */}
          <div
            onClick={() => navigate("/profile/dashboard")}
            className={`flex items-center gap-2 cursor-pointer p-2 text-gray-500 hover:text-gray-900 border-b-2 ${
              isActive("/profile/dashboard")
                ? "text-primary border-primary"
                : "border-transparent"
            }`}
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </div>
        </div>

        {/* Outlet */}
        <div className="bg-white shadow-lg mt-7 border-[1.5px] border-gray-200 w-full px-6 py-10 rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
