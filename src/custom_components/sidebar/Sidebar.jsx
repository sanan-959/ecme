import React from "react";
import {Link} from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { TbApple } from "react-icons/tb";

const Sidebar = () => {
    return (
        <div className="hidden lg:flex w-64 flex-col  h-screen bg-white border-r border-gray-300 z-50">
            <div className="p-4 bg-white">
                <img
                    className="w-32"
                    src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
                    alt="Logo"
                />
            </div>

            <div className="flex-1 overflow-y-auto mt-2 px-4 text-black">
                <ul className="space-y-2">

                    {/* Dashboard */}
                    <li>
                        <div className="flex gap-2 ">
                            <span>
                                <TbLayoutDashboard className="text-gray-500 text-2xl"/>
                            </span>
                            <span className="text-[16px] font-semibold text-gray-500">
                                Dashboard
                            </span>
                        </div>

                    </li>
                    {/* Class */}
                    <li className="text-gray-500 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
                        <Link to="class" className="block py-2">
                            <div className="flex gap-2 ">
                                <span>
                                    <TbApple className="text-gray-500 text-2xl"/>
                                </span>
                                <span className="font-semibold">Class</span>
                            </div>
                        </Link>
                    </li>
                    {/* Section */}
                    <li className="text-gray-500 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
                        <Link to="section" className="block py-2">
                            <div className="flex gap-2 ">
                                <span>
                                    <TbApple className="text-gray-500 text-2xl"/>
                                </span>
                                <span className="font-semibold">Section</span>
                            </div>
                        </Link>
                    </li>
                    {/* Parent */}
                    <li className="text-gray-500 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
                        <Link to="parent" className="block py-2">
                            <div className="flex gap-2 ">
                                <span>
                                    <TbApple className="text-gray-500 text-2xl"/>
                                </span>
                                <span className="font-semibold">Parent</span>
                            </div>
                        </Link>
                    </li>
                    {/* Teacher */}
                    <li className="text-gray-500 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
                        <Link to="teacher" className="block py-2">
                            <div className="flex gap-2 ">
                                <span>
                                    <TbApple className="text-gray-500 text-2xl"/>
                                </span>
                                <span className="font-semibold">Teacher</span>
                            </div>
                        </Link>
                    </li>
                    {/* Subject */}
                    <li className="text-gray-500 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
                        <Link to="subject" className="block py-2">
                            <div className="flex gap-2 ">
                                <span>
                                    <TbApple className="text-gray-500 text-2xl"/>
                                </span>
                                <span className="font-semibold">Subject</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
