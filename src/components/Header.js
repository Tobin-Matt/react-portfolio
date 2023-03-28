import React from 'react';
import Navbar from './Navbar';

function Header(props) {
    return (
        <div  className="w-full h-[100px] flex justify-between items-center px-4 mb-10 bg-gradient-to-t from-[#1678FF] to-[#003C8F] text-white">
            <h1 className='text-4xl'>Matthew Tobin</h1>
            <Navbar handlePageChange={props.handlePageChange} />
        </div>
        
    )
}

export default Header;