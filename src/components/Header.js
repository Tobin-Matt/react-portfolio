import React from 'react';
import Navbar from './Navbar';

function Header(props) {
    return (
        <div>
            <h1>Matthew Tobin</h1>
            <Navbar handlePageChange={props.handlePageChange} />
        </div>
        
    )
}

export default Header;