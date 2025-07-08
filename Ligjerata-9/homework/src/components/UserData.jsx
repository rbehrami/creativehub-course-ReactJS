import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";

// Define validation schema at the top
const profileSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string()
        .required('Email is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Invalid email format'
    ),
  phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{9,}$/, 
        'Phone number must be at least 9 digits'
    ),
    
    cardnumber: Yup.string()
        .required('Card number is required')
        .matches(/^\d{16}$/, 'Card number must be 16 digits'
    ),
    cvv: Yup.string()
        .required('CVV is required')
        .matches(/^\d{3}$/,
        'CVV number should be 3 digits and it is in the back of the card'
    ),
  address: Yup.object().shape({
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    postal: Yup.string()
        .required('Postal code is required')
        .matches(/^\d{5}$/, 
        'Postal code must be 5 digits'
    ),
  }),
});

export function UserData(){

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue,
    }=useForm({
        resolver: yupResolver(profileSchema)
    });

    const sameAsShipping = watch('sameAsShipping');
    const shippingAddress = watch('shippingAddress');

    const onSubmit = (data) => {
        alert('Form Submitted!');
        console.log(data)
    }

    React.useEffect(()=>{
        if(sameAsShipping){
            setValue('billingAddress', shippingAddress)
        }
    }, [sameAsShipping, shippingAddress, setValue])

    return (
        <>
            <main className="max-w-xl mx-auto mt-10">
                <h1 className='text-left'>3.  Create a single-step form that collects ...</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <h2 className="text-xl font-bold mb-6 text-center">User Data</h2>
                    <div>
                        <h3 className="text-md font-semibold mb-6 text-left">User personal information</h3>
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
                      <div className="flex max-w-md items-center gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Email Address:</label>
                            <input type="text" className="w-full border rounded px-3 py-2"  
                                    placeholder="Enter your email address"
                                    {...register('email')}
                            />
                        </div>
                    </div>
                      <div>
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                         <div className="flex max-w-md items-center gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Phone Number</label>
                            <input type="text" className="w-full border rounded px-3 py-2" 
                                    placeholder="Enter your phone number"
                                    {...register('phone')}
                            />
                        </div>
                      </div>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-6 text-left">User address information</h3>
                        <div className="flex max-w-md items-center gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Street Address:</label>
                            <input type="text" className="w-full border rounded px-3 py-2" 
                                    placeholder="Enter your Street Address"
                                    {...register('address.street')}
                            />
                        </div>
                        <div className="flex max-w-md items-center gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">City:</label>
                            <input type="text" className="w-full border rounded px-3 py-2" 
                                    placeholder="Enter your City"
                                    {...register('address.city')}
                            />
                        </div>
                        <div className="flex max-w-md items-center gap-4 mb-4 ">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">State or Province:</label>
                            <select name="StateProvince" className='w-full border rounded px-3 py-2' >
                                <option value="">Select State or Province</option>
                                <option value="prishtina">Kosovo</option>
                                <option value="vushtrri">Albania</option>
                                <option value="mitrovice">Montenegro</option>
                                <option value="skenderaj">North Macedonia</option>
                            </select>
                        </div>
                        <div>
                            {errors.address?.postal &&  <p className="text-red-500 text-sm">{errors.address.postal.message}</p>}
                            <div className="flex max-w-md items-center gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Postal Code:</label>
                            <input type="number" className="w-full border rounded px-3 py-2" 
                                    placeholder="Enter your Postal Code"
                                    {...register('address.postal')}
                            />
                        </div>
                        </div>
                        <div className="flex max-w-md items-center gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Country:</label>
                            <select name="StateProvince" className="w-full border rounded px-3 py-2">
                                <option value="">Select your Country</option>
                                <option value="prishtina">Kosovo</option>
                                <option value="vushtrri">Albania</option>
                                <option value="mitrovice">North Macedonia</option>
                                <option value="skenderaj">Montenegro</option>
                            </select>
                        </div>
                    </div>

                    {/* User bank information */}
                    <div>
                        <h3 className="text-md font-semibold mb-6 text-left">User Bank information</h3>
                        <div>
                            {errors.cardnumber && <p className="text-red-500 text-sm">{errors.cardnumber.message}</p>}
                            <div className="flex max-w-md items-center gap-4 mb-4">
                                <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Card Number:</label>
                                <input type="text" className="w-full border rounded px-3 py-2" 
                                        placeholder="Enter your Card Number"
                                        {...register('cardnumber')}
                                />
                        </div>
                        </div>
                        <div className="flex max-w-md items-center gap-4 mb-4">
                            <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">Expiration Card Date:</label>
                                <input type="date" className="w-full border rounded px-3 py-2" 
                                        
                                        placeholder="Enter Card expiration date"
                                />                                                   
                        </div> 
                        <div className='max-w-md'>
                            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
                            <div className="flex max-w-md items-center gap-4 mb-4">
                                <label htmlFor="" className="w-42 text-gray-700 text-left font-bold mb-2">CVV:</label>
                                <input type="text" className="w-full border rounded px-3 py-2" 
                                        placeholder="Enter CVV of the card"
                                        {...register('cvv')}  
                                        maxLength={3}
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
                                        }}

                                />
                            </div>
                        </div>
                         <div>    
                        <div>
                            <label className="block font-bold">Shipping Address</label>
                            <input
                                type="text"
                                placeholder="Enter your shipping address"
                                {...register('shippingAddress', { required: 'Shipping address is required' })}
                                className="w-full border px-3 py-2 rounded"
                            />
                            {errors.shippingAddress && (
                            <p className="text-red-500 text-sm">{errors.shippingAddress.message}</p>
                            )}
                        </div>                        
                        <div>
                            <input type="checkbox" className="w-full border rounded px-3 py-2" {...register('sameAsShipping')} />
                            <label>Billing address same as shipping</label>
                        </div>
                        {!sameAsShipping && (
                            <div>
                            <label className="block font-bold">Billing Address</label>
                            <input
                                type="text"
                                placeholder="Enter your billing address"
                                {...register('billingAddress', { required: 'Billing address is required' })}
                                className="w-full border px-3 py-2 rounded"
                            />
                            {errors.billingAddress && (
                                <p className="text-red-500 text-sm">{errors.billingAddress.message}</p>
                            )}
                            </div>
                        )}
                    </div>                        
                    </div>
                     <button type="submit" className="bg-blue-600 text-white mt-5 py-2 px-4 rounded w-full">Submit</button>
                </form>
            </main>
        </>
    )
}