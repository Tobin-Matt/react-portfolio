import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    // set variable to hold error message to be printed
    const [errorMessage, setErrorMessage] = useState('');
    // set variable to check the value of each form field
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    // need a onBlur function to notify that form fields are required when user moves cursor out of field
        //if form value is false
        //then give alert message that field is required    
    const handleBlur = (e) => {
        
    }

    // need function to send notification if email address is incorrect
    

    return (
        <form>
            <div>
                <label for='helper-text' className='block mt-2 text-md text-white'>Name</label>
                <input 
                    type='text' 
                    name='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' 
                    placeholder='full name'
                    onBlur={handleBlur}
                ></input> 
            </div>
            
            <div>
                <label for='helper-text' className='block mt-2 text-md text-white'>Your email</label>
                <input 
                    type='email' 
                    name='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5' 
                    placeholder='email@gmail.com'
                    onBlur={handleBlur}
                ></input> 
            </div>
            
            <div>
                <label for='message' className='block mt-2 text-md text-white'>Your message</label>
                <textarea 
                    id='message' 
                    name='message'
                    rows='4' 
                    className='block mb-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' 
                    placeholder='Write your thoughts here...'
                    onBlur={handleBlur}
                ></textarea>
            </div>

            <div>
                <p></p>
            </div>
            
            <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center'>Submit</button>
        </form>
    )
}

export default Contact;