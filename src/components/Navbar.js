import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar(props) {
   console.log('navbar props');
   console.log(props);
   const handleClick = (event, page) => {
        event.preventDefault();
        props.handlePageChange(page); 
   }

   const [nav, setNav] = useState(false);
   const menuClick = () => setNav(!nav);

   return (
        <div>
            {/* Web menu */}
            <nav>
                <ul className='hidden md:flex text-3xl'>
                    <li className='nav-item px-4'>
                        <a 
                            href='about' 
                            onClick={(event) => handleClick(event, 'AboutMe')}
                            className={props.currentPage === 'AboutMe' ? 'nav-link active:text-gray-600 px-4' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className='nav-item px-4'>
                        <a 
                            href='portfolio' 
                            onClick={(event) => handleClick(event, 'Portfolio')}
                            className={props.currentPage === 'Portfolio' ? 'nav-link active:text-gray-600 px-4' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-item px-4'>
                        <a 
                            href='contact' 
                            onClick={(event) => handleClick(event, 'Contact')}
                            className={props.currentPage === 'Contact' ? 'nav-link active:text-gray-600 px-4' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li className='nav-item px-4'>
                        <a 
                            href='resume' 
                            onClick={(event) => handleClick(event, 'Resume')}
                            className={props.currentPage === 'Resume' ? 'nav-link active:text-gray-600 px-4' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            
            {/* Hamburger menu icon */}
            <div onClick={menuClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen z-10 bg-[#3d5374] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <a 
                    href='about' 
                    onClick={(event) => {
                    handleClick(event, 'AboutMe');
                    setNav(false); // close the menu
                    }}
                    className={props.currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
                </li>
                <li className='py-6 text-4xl'>
                <a 
                    href='portfolio' 
                    onClick={(event) => {
                    handleClick(event, 'Portfolio');
                    setNav(false); // close the menu
                    }}
                    className={props.currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
                </li>
                <li className='py-6 text-4xl'>
                <a 
                    href='contact' 
                    onClick={(event) => {
                    handleClick(event, 'Contact');
                    setNav(false); // close the menu
                    }}
                    className={props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
                </li>
                <li className='py-6 text-4xl'>
                <a 
                    href='resume' 
                    onClick={(event) => {
                    handleClick(event, 'Resume');
                    setNav(false); // close the menu
                    }}
                    className={props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
                </li>
            </ul>
            </div>

        </div>
   )
   
}

export default Navbar;