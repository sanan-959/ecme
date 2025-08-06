import React from "react";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ParentList = () => {
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate('add'); 
    }
    
    const Parents = [
  {
    fatherName: "Ahmed Khan",
    email: "ahmed.khan@example.com",
    fatherContact: "0301-1234567",
    cnic: "35202-1234567-1",
    motherName: "Zahra Ahmed",
    motherContact: "0312-7654321",
    whatsapp: "0301-1234567",
    note: "Prefers morning classes"
  },
  {
    fatherName: "Bilal Hussain",
    email: "bilal.hussain@example.com",
    fatherContact: "0322-4567890",
    cnic: "35201-2345678-2",
    motherName: "Sara Bilal",
    motherContact: "0333-4567890",
    whatsapp: "0322-4567890",
    note: "Lives out of city"
  },
  {
    fatherName: "Imran Sheikh",
    email: "imran.sheikh@example.com",
    fatherContact: "0345-9876543",
    cnic: "35203-3456789-3",
    motherName: "Nadia Imran",
    motherContact: "0300-2345678",
    whatsapp: "0345-9876543",
    note: "Sibling already enrolled"
  },
  {
    fatherName: "Tariq Mehmood",
    email: "tariq.mehmood@example.com",
    fatherContact: "0307-1122334",
    cnic: "35204-4567890-4",
    motherName: "Farah Tariq",
    motherContact: "0311-2233445",
    whatsapp: "0307-1122334",
    note: "Requires fee concession"
  }
];

    return (
        <div className="container mx-auto">
            <div className="mb-3"><span className="text-xl font-bold py-3 text-dark">Parents</span></div>
            <div className="bg-white p-4 border-1 border-accent rounded-xl">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-dark">Parent List</h3>
                        <div>
                            <button onClick={handleNavigation} className=" bg-primary hover:bg-muted border-none focus:outline-none text-secondary rounded-xl px-2 py-2">
                                <span className="flex gap-1 items-center justify-center">
                                    <span>
                                        <GoPlus className="text-xl font-bold" />
                                    </span>
                                    <span className="text-md font-semibold">Add Parent</span>
                                </span>
                            </button>
                            
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center w-1/2 bg-inputbg  py-1 px-5 rounded-xl focus-within:ring-2 focus-within:ring-muted transition">
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
                    <div className="overflow-x-auto ">
                        <table className="min-w-max table-auto ">
                            <thead>
                                <tr className="border-inputbg hover:bg-inputbg">
                                    <td className="py-3 px-3 text-md text-dark font-semibold">
                                        Sr.No
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Father Name</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Email</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Father Contact</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>CNIC</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Mother Name</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Mother Contact</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Whatsapp</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-md font-semibold text-dark">
                                        <div className="flex items-center gap-1">
                                            <button><RiExpandUpDownFill /></button>
                                            <span>Note</span>
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
                                    Parents.map((parent, index) => {
                                        return (
                                            <tr key={index} className="border-b border-inputbg hover:bg-inputbg rounded-lg transition duration-200">
                                                <td className="py-3 px-3 text-dark">
                                                    {index + 1}
                                                </td>
                                                <td className="py-3 px-3 text-dark">{parent.fatherName}</td>
                                                <td className="py-3 px-3 text-dark">{parent.email}</td>
                                                <td className="py-3 px-3 text-dark">{parent.fatherContact}</td>
                                                <td className="py-3 px-3 text-dark">{parent.cnic}</td>
                                                <td className="py-3 px-3 text-dark">{parent.motherName}</td>
                                                <td className="py-3 px-3 text-dark">{parent.motherContact}</td>
                                                <td className="py-3 px-3 text-dark">{parent.whatsapp}</td>
                                                <td className="py-3 px-3 text-dark">{parent.note}</td>
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

export default ParentList;