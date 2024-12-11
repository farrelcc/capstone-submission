import { Avatar, Button } from "flowbite-react";
import React from "react";
import InputForm from "./InputForm";

export default function Profile() {
  return (
    <>
      {/* head title */}
      <div>
        <h1 className="font-bold text-2xl">Profile Information</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem?
        </p>
        <hr className="mt-5" />
        {/* profile */}
        <div className="mt-5 flex items-center gap-5">
          <div className="flex gap-2">
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
            <div>
              <h1 className="font-bold text-lg">Name</h1>
              <p className="text-gray-600 text-xs">status</p>
            </div>
          </div>
          <div>
            <Button size="xs" className="rounded-md bg-primary">
              Ubah Profile
            </Button>
          </div>
        </div>
        {/* form */}
        <form action="" className="mt-5 ">
          <div className="grid frid-col-1 sm:grid-cols-2 gap-4 ">
            <InputForm placeholder={"Nama"} />
            <InputForm label="Email" type="email" placeholder={"Email..."} />
            <InputForm
              placeholder={"Password"}
              type="password"
              label="Password"
            />
          </div>
          <div className="flex justify-end mt-5">
            <Button className="bg-primary cursor-pointer">Simpan</Button>
          </div>
        </form>
      </div>
    </>
  );
}
