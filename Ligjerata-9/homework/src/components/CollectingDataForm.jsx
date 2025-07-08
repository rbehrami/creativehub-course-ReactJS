import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";

const profileSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string()
            .required('Email is required')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'Invalid email format'
        ),
    subject: Yup.string().required('Subject is required'),
    textmessage: Yup.string().required('Message field is required'),
})



export function CollectingData(){
    const {
        register,
        handleSubmit,
        formState: {errors},
    }=useForm({
        resolver: yupResolver(profileSchema)
    });

     const onSubmit = (data) => {
        alert(`Confirm message! Thank you ${data.fullName} for your Submission.`);
        console.log(data)
    }
    

    return (

        <>
        <main className="max-w-xl mx-auto mt-10">
            <h1 className='text-left'>4. Create a form that collects basic contact</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <h2 className="text-xl font-bold mb-6 text-center">Collecting Data Form</h2>
                    <div>
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                        <div className="flex items-center max-w-md gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Full Name:</label>
                            <input type="text"  className="w-full border rounded px-3 py-2" 
                                    placeholder="Enter your Full Name"
                                    {...register('fullName')}
                            />
                        </div>
                    </div>
                    <div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        <div className="flex items-center max-w-md gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Email:</label>
                            <input type="text"  className="w-full border rounded px-3 py-2" 
                                    placeholder="Enter your Full Name"
                                    {...register('email')}
                            />
                        </div>
                    </div>
                    <div>
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                        <div className="flex items-center max-w-md gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Subject:</label>
                            <input type="text"  className="w-full border rounded px-3 py-2" 
                                    placeholder="Enter subject"
                                    {...register('subject')}
                            />
                        </div>
                    </div>
                    <div>
                        {errors.textmessage && <p className="text-red-500 text-sm">{errors.textmessage.message}</p>}
                        <div className="flex items-center max-w-md gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Email:</label>
                            <textarea className="w-full border rounded px-3 py-2"
                                        placeholder='Type your message...'
                                        {...register('textmessage')}
                            
                            />
                            

                        </div>
                    </div>
                <button type="submit" className="bg-blue-600 text-white mt-5 py-2 px-4 rounded w-full">Submit</button>
            </form>
        </main>
        </>
    )
}