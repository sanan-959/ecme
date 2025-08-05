import React from "react";
const Modal = ({ openModal, closeModal }) => {
    if (!openModal) return null;

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {/* Modal */}
            <div className="fixed inset-0 z-5 flex items-start justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h2 className="text-xl font-semibold mb-4 text-center">Add Class</h2>
                    {/* Close Button */}
                    <button onClick={closeModal} className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Modal;
