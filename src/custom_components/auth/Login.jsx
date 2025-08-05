import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiImageCircleAiFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const LoginPage =()=> {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); 
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className=" w-full max-w-md p-4 h-full">
        <span><RiImageCircleAiFill className="text-5xl text-green-800 mx-auto mb-4" /></span>
        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-center">Log in to your account</h2>
        <p className="text-[8px] md:text-[12px] font-semibold mb-4 text-center text-gray-500">Welcome back! Please enter your details.</p>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-500 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="sanan@example.com"
          />
        </div>

        {/* Password Field with Eye Icon */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-500 text-sm font-medium mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="w-full px-3 py-2 pr-10 bg-gray-100 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="*********"
          />
          <div
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Checkbox and forgot password */}
        <div className="mb-6 flex items-center justify-between text-sm">
          <label className="flex items-center text-[10px] sm:text-sm">
            <input type="checkbox" className="mr-2" />
            Remember for 30 days
          </label>
          <a href="#" className="text-green-800 text-[10px] sm:text-sm font-semibold hover:underline">
            Forgot password?
          </a>
        </div>

        {/* SignIn Button */}
        <button
          onClick={handleLogin}
          type="submit"
          className="w-full bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
        >
          Sign In
        </button>

        {/* Last Link for Create Account */}
        <p className="mt-6 text-left text-[10px] md:text-sm text-gray-500 font-semibold">
          Don’t have an &nbsp;
          <a href="#" className="text-green-800 font-semibold hover:underline">
             <span>Contact your administrator for access </span>
          </a>
          account?
        </p>
      </div>
    </div>
  );
}

export default LoginPage;