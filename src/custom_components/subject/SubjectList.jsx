import React from "react";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import SubjectModal from "./SubjectModel";

const SubjectList = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const Subjects = [
        {
            code: 123,
            name: "Mathematics",
            type: "Elective",
        },
        {
            code: 124,
            name: "English",
            type: "Core",
        },
        {
            code: 134,
            name: "History",
            type: "Elective",
        },
        {
            code: 112,
            name: "Biology",
            type: "Core",
        }
    ]
    return (
        <div className="w-full">
            <div className="mb-3"><span className="text-xl font-bold py-3 text-dark">Subjects</span></div>
            <div className="bg-white p-4 border-1 border-accent rounded-xl w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-dark">Subject List</h3>
                        <div>
                            <button onClick={() => setModalOpen(true)} className=" bg-primary hover:bg-muted border-none focus:outline-none text-secondary rounded-xl px-2 py-2">
                                <span className="flex gap-1 items-center justify-center">
                                    <span>
                                        <GoPlus className="text-xl font-bold" />
                                    </span>
                                    <span className="text-md font-semibold">Add Subject</span>
                                </span>
                            </button>
                            <SubjectModal openModal={modalOpen} closeModal={() => setModalOpen(false)} />
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
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-[800px] w-full  ">
                            <thead>
                                <tr className="border-inputbg hover:bg-inputbg">
                                    <td className="py-3 px-3 text-md text-dark font-semibold">
                                        Sr.No
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Subject Code</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Subject Name</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Section Type</span>
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
                                    Subjects.map((subject, index) => {
                                        return (
                                            <tr key={index} className="border-b border-inputbg hover:bg-inputbg rounded-lg transition duration-200">
                                                <td className="py-3 px-3 text-dark">
                                                    {index + 1}
                                                </td>
                                                <td className="py-3 px-3 text-dark">{subject.code}</td>
                                                <td className="py-3 px-3 text-dark">{subject.name}</td>
                                                <td className="py-3 px-3">
                                                    <span className={`py-1 px-2 rounded ${subject.type === "Core" ? "text-primary bg-green-100" : "text-blue-500 bg-blue-100"}`}>{subject.type}</span>
                                                </td>
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

export default SubjectList;