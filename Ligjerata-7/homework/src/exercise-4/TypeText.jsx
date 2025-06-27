import React from 'react'
import {useState} from 'react'

function InputText(){
    const maxLength = 20;
    const [inputText, setInputText] = useState('');

    // const handleInput = (e)=>{
    //     setInputText(e.target.value);
    // };

    const handleChange = (e)=>{
        if(e.target.value.length === 20){
            window.alert(
                "You have exceeded the character limit. You can type only 20 Characters, including space!"
            );
        }
        setInputText(e.target.value);
    }


    return (
        <div className='container mx-auto py-15 w-xl'>
            <label className="block text-gray-700 text-2xl mb-2">Your text here</label> 
            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" value={inputText} onChange={handleChange} maxLength={maxLength} />
        </div>
    )
}


export default InputText;
