import React from "react";

const ParentForm = () => {

    return (
        <div>
            <h2 className="text-xl font-bold mb-6 text-dark">Add Parent Details</h2>
            <form className="space-y-5">
                <div className="flex flex-col lg:flex-row gap-5">
                    {/* Parent Information */}
                    <div className="w-full lg:w-5/12 bg-secondary p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
                        <div className="mb-4">
                            <label className="block text-sm text-accent mb-1">Father Name</label>
                            <input type="text" placeholder="Enter father name" className="w-full bg-inputbg p-3 rounded-lg text-sm focus:ring-1 focus:ring-muted focus:outline-none" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-accent mb-1">Email</label>
                            <input type="email" placeholder="Enter email" className="w-full bg-inputbg p-3 rounded-lg text-sm focus:ring-1 focus:ring-muted focus:outline-none" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-accent mb-1">Father Contact</label>
                            <input type="text" placeholder="03xx-xxxxxxx" className="w-full bg-inputbg p-3 rounded-lg text-sm focus:ring-1 focus:ring-muted focus:outline-none" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-accent mb-1">CNIC</label>
                            <input type="text" placeholder="xxxxx-xxxxxxx-x" className="w-full bg-inputbg p-3 rounded-lg text-sm focus:ring-1 focus:ring-muted focus:outline-none"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-accent mb-1">Mother Name</label>
                            <input type="text" placeholder="Enter mother name" className="w-full bg-inputbg p-3 rounded-lg text-sm focus:ring-1 focus:ring-muted focus:outline-none" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-accent mb-1">Mother Contact</label>
                            <input type="text" placeholder="03xx-xxxxxxx" className="w-full bg-inputbg p-3 rounded-lg text-sm focus:ring-1 focus:ring-muted focus:outline-none" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-accent mb-1">Whatsapp</label>
                            <input type="text" placeholder="03xx-xxxxxxx" className="w-full bg-inputbg p-3 rounded-lg text-sm focus:ring-1 focus:ring-muted focus:outline-none" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-accent mb-1">Note</label>
                            <textarea placeholder="Additional note" className="w-full bg-inputbg p-3 rounded-lg text-sm focus:ring-1 focus:ring-muted focus:outline-none"></textarea>
                        </div>
                    </div>
                    {/* Upload Section */}
                    <div className="w-full lg:w-7/12 bg-white p-6 rounded-2xl self-start">
                        <h3 className="text-xl font-semibold mb-4">Upload Documents</h3>

                        <div className="space-y-6">

                            {/* 1. Father Photo */}
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Father Photo</label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4h10v12M7 20h10"></path>
                                            </svg>
                                            <p className="text-sm text-gray-400">Click to upload father photo</p>
                                        </div>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>

                            {/* 2. CNIC Front */}
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">CNIC Front</label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4h10v12M7 20h10"></path>
                                            </svg>
                                            <p className="text-sm text-gray-400">Click to upload CNIC front</p>
                                        </div>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>

                            {/* 3. CNIC Back */}
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">CNIC Back</label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4h10v12M7 20h10"></path>
                                            </svg>
                                            <p className="text-sm text-gray-400">Click to upload CNIC back</p>
                                        </div>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                             {/* Submit Button */}
                            <div className="flex justify-end space-x-3 mt-6">
                                <button className="bg-primary text-secondary hover:bg-muted px-6 py-2 rounded-lg">Save</button>
                            </div>

                        </div>

                    </div>
                </div>
            </form>
        </div>



    );
};

export default ParentForm;
