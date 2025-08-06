import React from "react";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import ClassModal from "./ClassModel";

const ClassLists = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const Classes = [
        {
            name: "Math",
        },
        {
            name: "Science",
        },
        {
            name: "English",
        },
        {
            name: "History",
        },
        {
            name: "Computer",
        }
    ]
    return (
        <div className="container mx-auto">
            <div className="mb-3"><span className="text-xl font-bold py-3">Classes</span></div>
            <div className="bg-white p-4 border-1 border-gray-200 rounded-xl">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Class List</h3>
                        <div>
                            <button onClick={() => setModalOpen(true)} className=" bg-white border border-gray-300 text-gray-500 rounded-xl px-2 py-2">
                                <span className="flex gap-1 items-center justify-center">
                                    <span>
                                        <GoPlus className="text-gray-500 text-xl font-bold" />
                                    </span>
                                    <span className="text-gray-500 text-md font-semibold">Add Class</span>
                                </span>
                            </button>
                            <ClassModal openModal={modalOpen} closeModal={() => setModalOpen(false)} />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center w-full bg-gray-100 relative py-1 px-5 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 transition">
                            <input
                                className="w-full border-0 bg-transparent h-10 focus:outline-none"
                                placeholder="Quick search..."
                                type="text"
                            />
                            <div>
                                <CiSearch className="text-gray-500 text-2xl" />
                            </div>
                        </div>
                    </div>
                    {/* Table Section */}
                    <div className="overflow-x-auto w-full my-4">
                        <table className="min-w-max w-full table-auto ">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-3 text-md font-semibold">Class Name</td>
                                    <td className="py-3 px-3 text-md font-semibold">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Classes.map((className, index) => {
                                        return (
                                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition duration-200">
                                                <td className="py-3 px-3">{className.name}</td>
                                                <td className="flex items-center gap-3 py-3 px-3">
                                                    <button>
                                                        <CiEdit className="text-gray-500 text-xl" />
                                                    </button>
                                                    <button>
                                                        <FaRegEye className="text-gray-500 text-xl" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Section */}
                    <div className="flex flex-row items-center justify-between ">
                        <div>
                            <span class="text-sm font-medium text-gray-500">
                                Page 1 of 3
                            </span>
                        </div>
                        <div className=" flex items-center gap-2">
                            <button className=" bg-white border border-gray-300 text-gray-500 rounded-lg px-2 py-1">
                                Prev
                            </button>
                            <button className=" bg-white border border-gray-300 text-gray-500 rounded-lg px-2 py-1">
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ClassLists;