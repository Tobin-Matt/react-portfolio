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
        <div>
            {content()}
        </div>
    )
}

export default Content;