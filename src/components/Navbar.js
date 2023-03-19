import React from 'react';

function Navbar(props) {
   const handleClick = (event, page) => {
        event.preventDefault();
        props.handlePageChange(page); 
   }

   return (
        <nav>
            <ul>
                <li>
                    <a href='about' 
                    onClick={(event) => handleClick(event, 'AboutMe')}>About Me</a>
                </li>
                <li>
                    <a href='portfolio' 
                    onClick={(event) => handleClick(event, 'Portfolio')}>Portfolio
                    </a>
                </li>
                <li>
                    <a href='contact' 
                    onClick={(event) => handleClick(event, 'Contact')}>Contact
                    </a>
                </li>
                <li>
                    <a href='resume' 
                    onClick={(event) => handleClick(event, 'Resume')}>Resume
                    </a>
                </li>
            </ul>
        </nav>
   )
   
}

export default Navbar;