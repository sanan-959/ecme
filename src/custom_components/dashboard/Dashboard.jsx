import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../header/Header";


const Dashboard = () => {
    return (
        <div className="flex h-screen ">
            <div className="hidden lg:block fixed top-0 left-0 h-full w-64 z-50"><Sidebar/></div>
            <div className=" flex flex-1 flex-col lg:ml-64">
                <div className="fixed top-0 left-0 lg:left-64 right-0 z-40">
                    <Navbar/>
                </div>
                <div className=" mt-[60px] p-4 bg-gray-100 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
