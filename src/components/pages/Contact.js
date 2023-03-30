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
        const { name, value } = e.target;

        console.log(value.length);

        switch (name) {
            case 'name':
                setErrorMessage(value.length <= 0 ? 'Please enter your name' : ' ')
                break;

            case 'email':
                const validEmail = validateEmail(value);    
                setErrorMessage(value.length <= 0 ? 'Please enter your email address' 
                                : (!validEmail ? 'Your email is invalid' : ' '));
                break;
            
            case 'message':
                setErrorMessage(value.length <= 0 ? 'Please enter a message' : ' ')
                break;
            
            default: 
                break;
        }
    }
        
    // const handleBlur = (e) => {
    //     console.log(e.target.value.length);
    //     if (e.target.name === 'name') {
    //         if (e.target.value.length <= 0) {
    //             setErrorMessage('Please enter your name');
    //         } else {
    //             setErrorMessage(' ');
    //         }
    //     } else if (e.target.name === 'email') {
    //         const validEmail = validateEmail(e.target.value);
    //         if (e.target.value.length <= 0) {
    //             setErrorMessage('Please enter an email address');
    //         } else if (!validEmail) {
    //             setErrorMessage('Your email is invalid')
    //         } else {
    //             setErrorMessage(' ');
    //         }
    //     } else if (e.target.name === 'message') {
    //         if (e.target.value.length <= 0) {
    //             setErrorMessage('Please provide a message');
    //         } else {
    //             setErrorMessage(' ');
    //         }
    //     }
    // }

    // need function to send notification if email address is incorrect
    

    return (
        <form className='px-16'>
            <div>
                <label for='helper-text' className='block mt-2 text-md text-white'>Name</label>
                <input 
                    type='text' 
                    name='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5' 
                    placeholder='full name'
                    onBlur={handleBlur}
                ></input> 
            </div>
            
            <div>
                <label for='helper-text' className='block mt-2 text-md text-white'>Your email</label>
                <input 
                    type='email' 
                    name='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg  block w-full p-2.5' 
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
                    className='block mb-4 p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300' 
                    placeholder='Write your thoughts here...'
                    onBlur={handleBlur}
                ></textarea>
            </div>

            <div>
                <p className='text-xl text-red-800'>{errorMessage}</p>
            </div>
            
            <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center'>Submit</button>
        </form>
    )
}

export default Contact;