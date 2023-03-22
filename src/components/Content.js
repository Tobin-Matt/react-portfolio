import React from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Content(props) {
    // const [currentPage, setCurrentPage] = useState('AboutMe');

    let content = () => {
        if (props.currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (props.currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (props.currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    }

    return (
        <div className='w-full h-screen text-white'>
            <div className='px-8 mt-6 flex flex-col justify-start items-center h-full'>
                {content()}    
            </div>
            
        </div>
    )
}

export default Content;