import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { removeHyphensAndCapitalize } from '../../utils/helpers'

const styles = {
    image: {
        width: 300,
        height: 300,
        objectFit: 'contain',
    }
}

// name, description, link, gitHub for each project
function Project(props) {
    console.log('project props');
    console.log(props);
    const projectName = props.name;
    // const imagePath = require(`../../assets/${projectName}.png`).default;
    const imagePath = `/assets/${projectName}.png`

    return (
        // <div className='p-8 m-4 rounded-lg'>
        //     <img src={imagePath} alt={props.name} style={styles.image}></img>
        //     <div>
        //         <h4>
        //             <a href={props.link}>Project name here</a>
        //             <a href={props.gitHub}>
        //                 {/* <img src='/assets/github.png' alt='gitHub icon'></img> */}
        //                 <FaGithub />
        //             </a>
        //         </h4>
        //         <p></p>
        //     </div>
        // </div>

        // <div className='w-full md:h-screen text-gray-300'> 
        //     {/* container for all projects */}
        //     <div className='flex flex-col'>
        //         {/* card container */}
        //         <div className="shadow-lg shadow-[#040c16] bg-[#0096c7] group container rounded-md 
        //             flex justify-center text-center items-center mx-auto content-div ">
        //                 <img src={imagePath} alt={props.name}></img>
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col items-center mx-10 py-10">
            <img
                className="mb-3 rounded-lg shadow-xl shadow-[#003C8F]"
                src={imagePath} alt={props.name}
            />
            {/* <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
            </span> */}
            <div className="mt-4 flex space-x-3 lg:mt-6">
                <a
                href={props.link}
                className="inline-flex items-center py-2 px-4 text-center text-3xl text-[#f1faee] hover:text-[#e63946] focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                {removeHyphensAndCapitalize(props.name)}
                </a>
                <a
                href={props.gitHub}
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default Project;