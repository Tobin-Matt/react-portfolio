import React from 'react';
import Navbar from './Navbar';

function Header(props) {
    return (
        <div  className="text-xl w-full h-[100px] flex justify-between items-center px-4 mb-10 bg-[#0a192f] text-white">
            <h1>Matthew Tobin</h1>
            <Navbar handlePageChange={props.handlePageChange} />
        </div>
        
    )
}

export default Header;