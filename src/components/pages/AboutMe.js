import React from 'react';
// import BioPhoto from '/assets/IMG_5694.jpeg'

function AboutMe() {
    return (
        <div className='flex flex-wrap justify-center'>
            <img src='/assets/IMG_5694.jpeg' alt='bio' style={{ width: 300, heigth: 300 }} className='rounded-lg shadow-lg shadow-[#919191]'></img>
            <p className='text-xl py-10 px-16'>
                This is where the bio information will be placed.
            </p>
        </div>
        
    )
}

export default AboutMe;