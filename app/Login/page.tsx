import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      {/* Left Side */}
      <div className="text-3xl w-1/2 px-10">
        <Image
          width={300}
          height={100}
          alt="Facebook Logo"
          src={"/images/icons/facebook.webp"}
        ></Image>
        <p className=" -mt-3 w-2/3">
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn.
        </p>
      </div>
      {/* Right Side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
        <input
          className="my-2 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
          Log in
        </button>
        <p className=" cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">
          Forgotten Password
        </p>
        <span>
          <hr />
        </span>
        <button className=" bg-green-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-700 px-2 w-fit mx-auto">
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default Login;
