import React from "react";
const SubjectModal = ({ openModal, closeModal }) => {
    if (!openModal) return null;

    return (
        <div className="flex items-center justify-center">
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-secondary rounded-lg shadow-lg w-96">
                    <div className="flex items-center justify-between mb-4 bg-inputbg p-2 rounded-t-lg">
                        {/* Title */}
                        <span className="text-lg font-semibold text-center text-dark">Add Subject</span>
                        {/* Close Button */}
                        <button onClick={closeModal} className="px-2 py-1 bg-transparent text-dark rounded hover:bg-accent  hover:text-secondary">
                            X
                        </button>
                    </div>
                    <div>
                        <form>
                            <div className="mb-4 px-4 ">
                                <label className="block text-sm font-medium text-accent">Subject Code</label>
                                <input type="text" className="mt-1 block bg-inputbg w-full text-dark border border-inputbg focus:border-muted rounded-md shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-muted" placeholder="Enter subject code" />
                            </div>
                            <div className="mb-4 px-4 ">
                                <label className="block text-sm font-medium text-accent">Subject Name</label>
                                <input type="text" className="mt-1 block bg-inputbg w-full text-dark border border-inputbg focus:border-muted rounded-md shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-muted" placeholder="Enter subject name" />
                            </div>
                            <div className="mb-4 px-4">
                                <label className="block text-sm font-medium text-accent">Subject Type</label>
                                <select
                                    className="mt-1 block bg-inputbg w-full text-dark border border-inputbg focus:border-muted rounded-md shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-muted"
                                    defaultValue="">
                                    <option value="" disabled>Select subject type</option>
                                    <option value="Core">Core</option>
                                    <option value="Elective">Elective</option>
                                </select>
                            </div>

                            <div className="flex justify-end p-4 space-x-3">
                                <button type="button" onClick={closeModal} className="px-4 py-2 bg-inputbg text-dark rounded hover:bg-accent hover:text-secondary">
                                    Close
                                </button>
                                <button type="submit" className="px-4 py-2 bg-primary text-secondary rounded hover:bg-muted">
                                    Add Subject
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default SubjectModal;
