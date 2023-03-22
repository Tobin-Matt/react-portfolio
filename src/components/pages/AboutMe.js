import React from 'react';
import BioPhoto from '../../assets/IMG_5694.jpeg'

function AboutMe() {
    return (
        <div className='flex flex-row'>
            <img src={BioPhoto} alt='bio' style={{ width: 300, heigth: 300 }} className='rounded-lg'></img>
            <p className='text-xl py-10 px-16'>
                This is where the bio information will be placed.
            </p>
        </div>
        
    )
}

export default AboutMe;