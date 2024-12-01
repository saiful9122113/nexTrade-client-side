import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CancelPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const cancelPayment = async () => {
            try {
                // Make a POST request to the backend cancel API
                const response = await axios.post('http://localhost:5000/cancel', {
                    message: "Payment cancelled by the user", // You can send more info here if needed
                });

                console.log(response.data); // Log the response from the backend, if needed
                // Optionally, you can perform additional actions here, like updating the UI
            } catch (error) {
                console.error('Error cancelling the payment:', error);
            }
        };

        cancelPayment(); // Call the cancel payment API when the component loads
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const handleRetry = () => {
        // Redirect to retry the payment or go back to the product page
        navigate('/products'); // Replace '/products' with your actual product page route
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Payment Cancelled</h1>
            <p>You have cancelled the payment process.</p>
            <button
                onClick={() => navigate("/")}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-semibold"
            >
                Go to Home
            </button>
        </div>
    );
};

export default CancelPage;
