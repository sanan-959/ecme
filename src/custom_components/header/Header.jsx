import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=" flex justify-between bg-white h-[60px] shadow-sm px-3 lg-px-7 ">
            <div className="flex items-center space-x-1 lg:space-x-3">
                <div className="w-[40px] h-[40px] hover:bg-gray-200 flex items-center justify-center rounded-full p-3">
                    <button><RiMenu2Line className="w-6 h-6 text-gray-800" /></button>
                </div>
                <div className="w-[40px] h-[40px] hover:bg-gray-200 flex items-center justify-center rounded-full p-3">
                    <button><CiSearch className="w-6 h-6 text-gray-800" /></button>
                </div>
            </div>
            <div className="flex">
                <ul className="flex items-center space-x-1 lg:space-x-4">
                    <li>
                        <div className="w-[40px] h-[40px] hover:bg-gray-200 flex items-center justify-center rounded-full p-3">
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1" class="">
                                <IoMdHelpCircleOutline className="w-6 h-6 text-gray-800" />
                            </button>

                            <div id="dropdownNavbar1" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                                <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="w-[40px] h-[40px] hover:bg-gray-200 flex items-center justify-center rounded-full p-3">
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar2" class="">
                                <FaRegBell className="w-6 h-6 text-gray-800" />
                            </button>

                            <div id="dropdownNavbar2" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
                                <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="w-[40px] h-[40px] hover:bg-gray-200 flex items-center justify-center rounded-full p-3">
                            <button class="">
                                <IoSettingsOutline className="w-6 h-6 text-gray-800" />
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="w-[40px] h-[40px] hover:bg-gray-200 flex items-center justify-center rounded-full p-3">
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1" class="">
                                <FaRegUserCircle className="w-6 h-6 text-gray-800" />
                            </button>

                            <div id="dropdownNavbar1" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
