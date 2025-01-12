import React from "react";
import { FaTimes } from "react-icons/fa"; // Icona per chiudere

const Help = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                {/* Bottone per chiudere */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    <FaTimes className="w-5 h-5" />
                </button>

                {/* Contenuto della modal */}
                <div className="mt-2">{children}</div>
            </div>
        </div>
    );
};

export default Help;
