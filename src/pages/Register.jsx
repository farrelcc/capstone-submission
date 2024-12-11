import React from "react";
import securitySVG from "../assets/Web Security.svg";
import InputAuth from "../components/InputAuth";
export default function Register() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 px-5 bg-gray-200 justify-center items-center flex flex-col">
          {/* title */}
          <div className="text-center mb-10">
            <div className="font-bold text-4xl">
              <h1>Welcome To Bumi Aveshana</h1>
            </div>
            <div className="text-lg text-gray-600">
              <p>Register to your accunt to continue</p>
            </div>
          </div>
          {/* form */}
          <form action="" className="w-full flex flex-col gap-5 mt-10 px-14">
            <InputAuth height={16} placeholder={"Name"} type={"text"} />
            <InputAuth height={16} placeholder={"Username"} type={"text"} />
            <InputAuth height={16} placeholder={"Password"} type={"password"} />
            <InputAuth
              height={16}
              placeholder={"Konfirmasi Password"}
              type={"password"}
            />
            <div className="mt-10">
              <button className="w-full  bg-primary text-white rounded-md py-4 text-2xl">
                Register
              </button>
              <p className="text-center mt-2">
                Already have an account{" "}
                <a
                  href="/login"
                  className="text-primary font-semibold hover:underline"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
        {/* left */}
        <div className="w-1/2  flex justify-center items-center">
          <img src={securitySVG} alt="" />
        </div>
      </div>
    </>
  );
}
