"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Image from "next/image";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="content  flex justify-center items-center  max-w-full mx-auto p-[1.75rem] sm:p-[0rem] ">
        <div className="flex flex-col justify-center items-center mx-auto  place-self-center max-h-screen">
          <div className="back-button text-base  flex  w-full  h-16 mb-2">
            <div className="back-button flex gap-3 items-center justify-center">
              <div className="h-5 w-5">
                <Image src="/images/back.png" height={20} width={20} />
              </div>
              <div>Back</div>
            </div>
          </div>
          <div className="form-container flex flex-col items-center justify-center gap-[0.5rem] h-auto w-full sm:w-full flex-grow-1 flex-shrink-0 ">
            <div className="header flex flex-col gap-2 w-full  text-start">
              <div className="font-extrabold text-xl sm:text-3xl">
                Create an Account
              </div>
              <div>Enter your details to create your account!</div>
              <div className="google-signup flex items-center justify-center bg-[#F4F5FA] w-[98%] sm:w-[100%] h-10 rounded-lg">
                <div className="mr-2">
                  <Image
                    src="/images/Group.png"
                    height={20}
                    width={20}
                    alt="google"
                  />
                </div>
                <div className="text-base">Sign in with Google</div>
              </div>
            </div>
            {/* <div className="flex flex-col w-[60%]  items-center">
              <Image
                src="/images/Separator.png"
                height={500}
                width={800}
                alt="separator"
              />
            </div> */}
            <div className="flex flex-row gap-2 w-[100%] sm:w-[100%] h-[1.75rem] sm:h-[100%] items-center">
              <div className="separator w-[100%] h-[2px] bg-[#E0E5F2] my-4"></div>
              <div className="text-gray-500 text-xs">or</div>
              <div className="separator w-[100%] h-[2px] bg-[#E0E5F2] my-4"></div>
            </div>
            <form className="flex flex-col  w-full gap-2">
              <label htmlFor="name" className="text-[#182467]">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9]"
              />
              <label htmlFor="email" className="text-[#182467]">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9] placeholder-gray-400"
              />
              <label htmlFor="password" className="text-[#182467]">
                Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full h-10 border-2 rounded-lg px-4 focus:border-[#1F3DD9]"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-6 top-[50%] -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaRegEye
                      height={20}
                      width={20}
                      style={{ color: "#A3AED0", width: "20px" }}
                    />
                  ) : (
                    <FaRegEyeSlash
                      height={20}
                      width={20}
                      style={{ color: "#A3AED0", width: "20px" }}
                    />
                  )}
                </button>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="check" className="mr-2" />
                <label
                  htmlFor="check"
                  className="text-[#3A4264] mbMini:text-xs mbXSmall:text-sm font-sans"
                >
                  I accept the{" "}
                  <a href="#" className="text-[#1F3DD9] ">
                    Terms and services
                  </a>{" "}
                  as well as{" "}
                  <a href="#" className="text-[#1F3DD9] ">
                    Privacy policy
                  </a>
                </label>
              </div>
              <button className="bg-[#1F3DD9] text-white h-10 w-1/2 rounded-lg">
                Sign Up
              </button>
              <div className=" w-full  font-xs">
                Already have an account?{" "}
                <a href="/login" className="text-[#1F3DD9] font-xs">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="image-container w-[45%] max-h-screen  hidden lg:block">
          <Image
            src="/images/signup.png"
            alt="signup-image"
            height={500}
            width={500}
            style={{ width: "100%", height: "100%" }}
            className="max-h-screen"
          />
        </div>
      </div>
    </>
  );
}
