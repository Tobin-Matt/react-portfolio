import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <div className='mt-auto pb-6 border-t border-gray-100'>
            <ul className='mt-4 flex justify-center'>
                <li className='p-0 mx-6 rounded-full text-center text-white hover:shadow-xl hover:shadow-[#1678FF]'>
                    <a href='https://github.com/Tobin-Matt'>
                    <FaGithub size={56}/> 
                    </a>
                </li>
                <li className='p-0 mx-6 rounded-full text-center text-white hover:shadow-xl hover:shadow-[#1678FF]'>
                    <a href='https://github.com/Tobin-Matt'>
                    <FaTwitter size={56}/> 
                    </a>
                </li>
            </ul>
        </div>
        
        
    )
}

export default Footer;