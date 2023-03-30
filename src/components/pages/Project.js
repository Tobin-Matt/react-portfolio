import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { removeHyphensAndCapitalize } from '../../utils/helpers'

// name, description, link, gitHub for each project
function Project(props) {
    console.log('project props');
    console.log(props);
    const projectName = props.name;
    const imagePath = `/assets/${projectName}.png`

    return (
        <div class="group relative block">
            <img
                alt={projectName}
                src={imagePath}
                class="absolute inset-0 h-800 w-full object-cover rounded-lg transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 m-7">
                <div class="mt-32">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <a
                        href={props.link}
                        className='inline-flex items-center py-0 px-4 text-center text-3xl text-[#f1faee] hover:text-[#2c5282]'
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
            </div>
        </div>


        // <div className='p-8 h-full bg-cover flex justify-center' style={{ backgroundImage: `url(${imagePath})`, ...imgStyles }}>
        //     {/* <img
        //         className='w-full mb-3 rounded-lg shadow-xl shadow-[#919191] hover:shadow-xl hover:shadow-[#1678FF]'
        //         src={imagePath} alt={props.name}
        //     /> */}

        //     <div className='flex'>
        //         <a
        //         href={props.link}
        //         className='inline-flex items-center py-0 px-4 text-center text-3xl text-[#f1faee] hover:text-[#e63946]'
        //         >
        //         {removeHyphensAndCapitalize(props.name)}
        //         </a>
        //         <a
        //         href={props.gitHub}
        //         className='inline-flex items-center p-0 mx-6 rounded-full text-center text-gray-900 hover:shadow-xl hover:shadow-[#1678FF]'
        //         >
        //         <FaGithub size={56}/>
        //         </a>
        //     </div>
        // </div>
    )
}

export default Project;