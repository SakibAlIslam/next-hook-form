"use client";

import React from 'react'
import { useForm } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    password: string;
}

const Form = () => {
    const {
        register,  // ইনপুট ফিল্ড রেজিস্ট্রেশন করার জন্য
        handleSubmit,  // ফর্ম সাবমিট করার জন্য ব্যবহার করা হয়
        formState: { errors }  // formState থেকে errors নেয়া হয়েছে
    } = useForm<FormData>();

    const onSubmitFunc = (data: FormData) => {
        console.log('Submitted Data:', data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmitFunc)}>
            <div className='grid grid-rows-1 mb-4'>
                <label htmlFor="name" className='text-lg font-medium'>Name:</label>
                <input
                    type='text'
                    id="name"
                    placeholder='Enter your name'
                    className='h-12 mt-1 text-white bg-[#292929] border-2 border-[#383838] rounded-lg px-4 py-1 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-500'
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
            </div>
            <div className='grid grid-rows-1 mb-4'>
                <label htmlFor="email" className='text-lg font-medium'>Email:</label>
                <input
                    type='text'
                    id="email"
                    placeholder='Enter your email'
                    className='h-12 mt-1 text-white bg-[#292929] border-2 border-[#383838] rounded-lg px-4 py-1 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-500'
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                />
                {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>}
            </div>
            <div className='grid grid-rows-1 mb-4'>
                <label htmlFor="password" className='text-lg font-medium'>Password:</label>
                <input
                    type='password'
                    id="password"
                    placeholder='Enter your password'
                    className='h-12 mt-1 text-white bg-[#292929] border-2 border-[#383838] rounded-lg px-4 py-1 focus:outline-none focus:ring-1 focus:ring-green-500 caret-green-500'
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters",
                        }
                    })}
                />
                {errors.password && <p className='mt-1 text-sm text-red-500'>{errors.password.message}</p>}
            </div>
            <div>
                <button
                    type='submit'
                    className='hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-green-600
                mt-2 w-full text-white bg-green-500 rounded-lg px-2 py-2.5 text-center font-medium text-lg tracking-wide'
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form