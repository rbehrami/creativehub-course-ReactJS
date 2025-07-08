/* ======================= Using useState() Manual Check ============================= */
import { useForm } from 'react-hook-form';
import {useState} from 'react'

export function RegisterForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        //trim values to avoid spaces-only input
        const Name = name.trim();
        const Email = email.trim();
        const Password = password.trim();
        const ConfirmPassword = confirmPassword.trim();

        //Check for empty fields
        if(!Name || !Email || !Password || !ConfirmPassword){
           setErrorConfirmPassword('Please fill al the fields');
           return; 
        }

        //Check if passwords match
        if(Password !== ConfirmPassword){
            setErrorConfirmPassword('Passwords do not match');
            return;
        }
        
        //If all conditions are fullfilled
        alert('All fields filled!')
        console.log({
            name: Name, 
            email: Email, 
            password: Password, 
            confirmPassword: ConfirmPassword
        })

        //Clear form fields one by one after submited data
        setError('');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    return(
        <>
            <div className="max-w-md mx-auto mt-10">
                <h1 className='text-left'>2. Registration Form</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <h2 className="text-xl font-bold mb-6 text-center">Register Form with useState()</h2>
                    <div className="block max-w-md items-center gap-4 mb-4">
                        <label htmlFor="" className="text-gray-700 font-bold mb-2">Name:</label>
                        <input type="text"  className="w-full border rounded px-3 py-2" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
                    </div>
                    <div className="block items-center gap-5 mb-4">
                        <label htmlFor="" className="text-gray-700 font-bold mb-2">Email:</label>
                        <input type="text"  className="w-full border rounded px-3 py-2" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>

                    </div>
                    <div className="block items-center gap-5 mb-4">
                        <label htmlFor="" className="text-gray-700 font-bold mb-2">Password:</label>
                        <input type="text"  className="w-full border rounded px-3 py-2" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                    </div>
                    <div className="block items-center gap-5 mb-4">
                        <label htmlFor="" className="text-gray-700 font-bold mb-2">Confirm Password:</label>
                        <input type="text"  className="w-full border rounded px-3 py-2" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Enter confirm password"/>
                        {errorConfirmPassword && <p className="text-red-500 text-sm mt-1">{errorConfirmPassword}</p>}
                    </div>
                    {error && <p className="text-red-500 mb-3">{error}</p>}
                     <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

/* ======================= Using react-hook-form automatic validation ============================= */

export function RegistrationFormwithHook(){

    const { register, 
            handleSubmit, 
            watch,
            formState: {errors}
        } = useForm();

        const password = watch('password');

        const onSubmit = (data)=>{
            alert('All fields are filled');
            console.log(data);
        }

    return (
        <>
             <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-10">
                 <h2 className="text-xl font-bold mb-6 text-center">Register Form with react-hook-form</h2>
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                <input
                    {...register('name', {required: 'Name is required'})}
                    placeholder='Name'
                    className='mb-3 w-full border px-3 py-2 rounded'
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                <input
                    {...register('email', {required: 'Email is required'})}
                    placeholder='Email'
                    className='mb-3 w-full border px-3 py-2 rounded'
                />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                <input
                    {...register('password', {required: 'Password is required'})}
                    placeholder='Password'
                    className='mb-3 w-full border px-3 py-2 rounded'
                />
                 {errors.confirmpassword && <p className='text-red-500'>{errors.confirmpassword.message}</p>}
                <input
                    {...register('confirmpassword', {required: 'Please confirm your password',
                        validate:(value)=>
                            value === password || 'Password do not match',
                    })}
                    placeholder='Confirm Password'
                    className='mb-3 w-full border px-3 py-2 rounded'
                />

                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
                    Submit
                </button>
             </form>
        </>
    )
}
/* ======================= Using react-hook-form with loop error message automatic validation ============================= */
export function RegisterFormWithLoop(){

       const { register, 
            handleSubmit, 
            watch,
            formState: {errors}
        } = useForm();

        const password = watch('password');

        const onSubmit = (data)=>{
            alert('Form submitted successfully');
            console.log(data);
        }

    return (
        <>
             <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-10">
                 <h2 className="text-xl font-bold mb-6 text-center">Register Form with react-hook-form with LOOP</h2>
                
                <input
                    {...register('name', {required: 'Name is required'})}
                    placeholder='Name'
                    className='mb-3 w-full border px-3 py-2 rounded'
                />
                
                <input
                    {...register('email', {required: 'Email is required'})}
                    placeholder='Email'
                    className='mb-3 w-full border px-3 py-2 rounded'
                />
                
                <input
                    {...register('password', {required: 'Password is required'})}
                    placeholder='Password'
                    className='mb-3 w-full border px-3 py-2 rounded'
                />
                 
                <input
                    {...register('confirmpassword', {required: 'Please confirm your password',
                        validate:(value)=>
                            value === password || 'Password do not match',
                    })}
                    placeholder='Confirm Password'
                    className='mb-3 w-full border px-3 py-2 rounded'
                />

                {/*Show all errors together here */}
                {Object.keys(errors).length> 0 && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
                    <ul className="list-disc list-inside text-sm">
                        {Object.entries(errors).map(([key, value]) => (
                    <li key={key}>{value.message}</li>
                    ))}
                    </ul>
                </div>
                )}

                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
                    Submit
                </button>
             </form>
        </>
    )
}