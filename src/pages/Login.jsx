import React from "react";
import securitySVG from "../assets/Web Security.svg";
import InputAuth from "../components/InputAuth";
export default function Login() {
  return (
    <>
      <div className="flex h-screen">
        {/* left */}
        <div className="w-1/2  flex justify-center items-center">
          <img src={securitySVG} alt="" />
        </div>
        <div className="w-1/2 px-5 bg-gray-200 justify-center items-center flex flex-col">
          {/* title */}
          <div className="text-center mb-10">
            <div className="font-bold text-4xl">
              <h1>Welcome To Bumi Aveshana</h1>
            </div>
            <div className="text-lg text-gray-600">
              <p>Login to your accunt to continue</p>
            </div>
          </div>
          {/* form */}
          <form action="" className="w-full flex flex-col gap-5 mt-10 px-14">
            <InputAuth height={20} type={"email"} placeholder={"Email..."} />
            <InputAuth
              height={20}
              type={"password"}
              placeholder={"Password..."}
            />
            <div className="mt-10">
              <button className="w-full  bg-primary text-white rounded-md py-4 text-2xl">
                Login
              </button>
              <p className="text-center mt-2">
                Don't Have an account?{" "}
                <a
                  href="/register"
                  className="text-primary font-semibold hover:underline"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
