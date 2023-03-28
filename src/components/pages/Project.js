import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { removeHyphensAndCapitalize } from '../../utils/helpers'

// const styles = {
//     image: {
//         width: 300,
//         height: 300,
//         objectFit: 'contain',
//     }
// }

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
        <div className='p-8 h-full bg-cover flex justify-center' style={{ backgroundImage: `url(${imagePath})` }}>
            {/* <img
                className='w-full mb-3 rounded-lg shadow-xl shadow-[#919191] hover:shadow-xl hover:shadow-[#1678FF]'
                src={imagePath} alt={props.name}
            /> */}

            <div className='flex'>
                <a
                href={props.link}
                className='inline-flex items-center py-0 px-4 text-center text-3xl text-[#f1faee] hover:text-[#e63946]'
                >
                {removeHyphensAndCapitalize(props.name)}
                </a>
                <a
                href={props.gitHub}
                className='inline-flex items-center p-0 mx-6 rounded-full text-center text-gray-900 hover:shadow-xl hover:shadow-[#1678FF]'
                >
                <FaGithub size={56}/>
                </a>
            </div>
        </div>
    )
}

export default Project;