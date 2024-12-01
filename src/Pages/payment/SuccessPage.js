import React, { useEffect, useState } from 'react';

const SuccessPage = () => {
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch payment details from the backend
        const fetchPaymentDetails = async () => {
            try {
                const response = await fetch('http://localhost:5000/success', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({}), // Optional: send additional data if required
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch payment details');
                }

                const data = await response.json();
                setPaymentDetails(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPaymentDetails();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!paymentDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Payment Successful!</h1>
            <p>Transaction ID: {paymentDetails.transactionId}</p>
            <p>Amount Paid: {paymentDetails.amount} BDT</p>
            <p>Status: {paymentDetails.status}</p>
        </div>
    );
};

export default SuccessPage;
