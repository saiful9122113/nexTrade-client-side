import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const PurchasePage = () => {
    const data = useLoaderData()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = async(value) => {
        // const { data } = await axios.get(`http://localhost:5000/single-product/${value.product._id}`);
        // console.log(data);
        const response = await fetch("http://localhost:5000/get-payment-link", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("accessToken")
                },
                body: JSON.stringify(value)
            });
            
            const obj = await response.json();
            // console.log(obj)

            window.location.replace(obj.url);
    }


    const onSubmit = async (value) => {
        try {
            const info = {userInfo: value, product: data}
            console.log(info, localStorage.getItem("accessToken"));
            submit(info)
            // const response = await fetch("http://localhost:5000/get-payment-link", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Authorization": "Bearer " + localStorage.getItem("accessToken")
            //     },
            //     body: JSON.stringify(info)
            // });
            
            // const data = await response.json();
            

            // window.location.replace(data.url);
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };


    return (
        <section className='container mx-auto p-6 w-full h-full flex justify-center items-center'>
            <div className='space-y-10 p-6 rounded-lg border bg-white lg:w-[50%] md:w-[65%] sm:w-[75%] w-full shadow-lg'>
                <h1 className='text-3xl font-bold text-center text-gray-800'>Checkout Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col'>
                            <label htmlFor='firstName' className='font-medium text-gray-700'>First name</label>
                            <input id='firstName' {...register('firstName', { required: true })} placeholder='Enter your first name' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                            {errors.firstName && <small className='text-red-500'>First name is required</small>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='lastName' className='font-medium text-gray-700'>Last name (optional)</label>
                            <input id='lastName' {...register('lastName')} placeholder='Enter your last name' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='email' className='font-medium text-gray-700'>Email</label>
                        <input type='email' id='email' {...register('email', { required: true })} placeholder='Enter your email' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                        {errors.email && <small className='text-red-500'>Email is required</small>}
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='phone' className='font-medium text-gray-700'>Phone</label>
                        <input type='number' id='phone' {...register('phone', { required: true })} placeholder='Enter your phone number' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                        {errors.phone && <small className='text-red-500'>Phone number is required</small>}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col'>
                            <label htmlFor='address' className='font-medium text-gray-700'>Street Address</label>
                            <input id='address' {...register('address', { required: true })} placeholder='Enter your street address' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                            {errors.address && <small className='text-red-500'>Address is required</small>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='city' className='font-medium text-gray-700'>City/Town</label>
                            <input id='city' {...register('city', { required: true })} placeholder='Enter your city' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                            {errors.city && <small className='text-red-500'>City/Town is required</small>}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col'>
                            <label htmlFor='state' className='font-medium text-gray-700'>State/Province/Region</label>
                            <input id='state' {...register('state', { required: true })} placeholder='Enter your state/province/region' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                            {errors.state && <small className='text-red-500'>State/Province/Region is required</small>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='postal' className='font-medium text-gray-700'>Postal/Zip Code</label>
                            <input id='postal' {...register('postal', { required: true })} placeholder='Enter your postal/zip code' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                            {errors.postal && <small className='text-red-500'>Postal/Zip Code is required</small>}
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='country' className='font-medium text-gray-700'>Country</label>
                        <input id='country' {...register('country', { required: true })} placeholder='Enter your country' className="py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                        {errors.country && <small className='text-red-500'>Country is required</small>}
                    </div>

                    {/* Total Payment */}
                    <div className='flex justify-between items-center'>
                        <p className='text-lg font-semibold text-gray-800'>Total Payment:</p>
                        <p className='text-lg font-semibold text-gray-900'>{data.productResalePrice} BDT</p>
                    </div>

                    {/* Updated Button */}
                    <button type='submit' className='bg-green-600 hover:bg-green-700 transition-colors p-4 text-white w-full rounded-lg font-semibold text-xl flex justify-center items-center'>
                        Proceed to Payment - {data.productResalePrice} BDT
                    </button>
                </form>
            </div>
        </section>
    );
};

export default PurchasePage;