import React from 'react';

function AboutMe() {
    return (
        <div className='flex flex-wrap justify-center'>
            <img src={`${process.env.PUBLIC_URL}/assets/IMG_5694.jpeg`} alt='bio' style={{ width: 300, heigth: 300 }} className='rounded-lg shadow-lg shadow-[#919191]'></img>
            <p className='text-xl py-10 px-16'>
                Hello, I'm Matt! I am a full stack bootcamp student looking to expand my knowledge and 
                skills with computer programming. I enjoy problem solving and being able to apply creativity 
                to the solutions. I have experience as a field engineer in the civil engineering industry. 
                I am looking to further myself and my career with a front-end engineer position.
            </p>
        </div>
        
    )
}

export default AboutMe;