import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../header/Header";


const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 fixed"><Sidebar/></div>
            <div className=" flex flex-1 flex-col">
                <div className="lg:ml-64">
                    <Navbar/>
                </div>
                <div className="lg:ml-64 p-6 bg-gray-100">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
