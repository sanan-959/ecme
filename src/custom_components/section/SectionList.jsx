import React from "react";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import SectionModal from "./SectionModel";

const SectionList = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const Sections = [
        {
            name: "A",
        },
        {
            name: "B",
        },
        {
            name: "C",
        },
        {
            name: "D",
        }
    ]
    return (
        <div className="container">
            <div className="mb-3"><span className="text-xl font-bold py-3 text-dark">Sections</span></div>
            <div className="bg-white p-4 border-1 border-accent rounded-xl w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-dark">Section List</h3>
                        <div>
                            <button onClick={() => setModalOpen(true)} className=" bg-primary hover:bg-muted border-none focus:outline-none text-secondary rounded-xl px-2 py-2">
                                <span className="flex gap-1 items-center justify-center">
                                    <span>
                                        <GoPlus className="text-xl font-bold" />
                                    </span>
                                    <span className="text-md font-semibold">Add Section</span>
                                </span>
                            </button>
                            <SectionModal openModal={modalOpen} closeModal={() => setModalOpen(false)} />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center w-1/2 bg-inputbg relative py-1 px-5 rounded-xl focus-within:ring-2 focus-within:ring-muted transition">
                            <input
                                className="w-full border-none bg-transparent h-10 focus:outline-none text-dark"
                                placeholder="Quick search..."
                                type="text"
                            />
                            <div>
                                <CiSearch className="text-accent text-2xl" />
                            </div>
                        </div>
                    </div>
                    {/* Table Section */}
                    <div className="overflow-x-auto">
                        <table className="min-w-[800px] w-full">
                            <thead>
                                <tr className="border-inputbg hover:bg-inputbg">
                                    <td className="py-3 px-3 text-md text-dark font-semibold">
                                        Sr.No
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Section Name</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Action</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <button><RiExpandUpDownFill /></button>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Sections.map((sectionName, index) => {
                                        return (
                                            <tr key={index} className="border-b border-inputbg hover:bg-inputbg rounded-lg transition duration-200">
                                                <td className="py-3 px-3 text-dark">
                                                    {index + 1}
                                                </td>
                                                <td className="py-3 px-3 text-dark">{sectionName.name}</td>
                                                <td className="flex items-center gap-3 py-3 px-3">
                                                    <button>
                                                        <CiEdit className="text-accent text-xl" />
                                                    </button>
                                                    <button>
                                                        <MdOutlineDelete className="text-red-500 text-xl" />
                                                    </button>
                                                </td>
                                                <td></td>
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
                            <span class="text-sm font-medium text-accent">
                                Page 1 of 3
                            </span>
                        </div>
                        <div className=" flex items-center gap-3">
                            <button className=" bg-secondary border border-inputbg hover:bg-inputbg text-accent rounded-lg px-2 py-1">
                                Previous
                            </button>
                            <div className="bg-primary hover:bg-muted text-secondary rounded-lg py-1 px-3">1</div>
                            <button className=" bg-secondary border border-inputbg hover:bg-inputbg text-accent rounded-lg px-2 py-1">
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SectionList;