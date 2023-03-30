import React from 'react';
import Navbar from './Navbar';

function Header(props) {
    return (
        <div  className="w-full h-[100px] flex justify-between items-center px-4 mb-10 text-white">
            <a
                href='about'
                onClick={() => props.handlePageChange('AboutMe')}
            >
                <h1 className='text-4xl'>Matthew Tobin</h1>
            </a>
            
            <Navbar handlePageChange={props.handlePageChange} />
        </div>
        
    )
}

export default Header;

// #ffd89b → #19547b