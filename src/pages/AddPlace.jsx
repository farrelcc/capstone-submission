import { Avatar, Button } from "flowbite-react";
import React from "react";
import InputForm from "../components/InputForm";

export default function AddPlace() {
  return (
    <>
      {/* head title */}
      <div>
        <h1 className="font-bold text-2xl">Tambah Tempat</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rem?
        </p>
        <hr className="mt-5" />
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
