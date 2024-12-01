import React from "react";
import { useNavigate } from "react-router-dom";

const FailPage = () => {
    const navigate = useNavigate();

    return (
        <section className="container mx-auto p-6 w-full h-full flex justify-center items-center">
            <div className="space-y-6 text-center bg-red-50 border border-red-300 rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-red-700">Payment Failed! 😞</h1>
                <p className="text-lg text-red-800">Unfortunately, your payment could not be processed. Please try again later.</p>
                <button
                    onClick={() => navigate("/purchase")}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-semibold"
                >
                    Try Again
                </button>
            </div>
        </section>
    );
};

export default FailPage;
