import React, { useState } from 'react';
import Project from './Project';

function Portfolio() {
    const [projects, setProjects] = useState([
        {
            name: 'pantry-pal',
            description: 'MVC Full Stack',
            link: 'https://the-pantry-pal.herokuapp.com/landing',
            gitHub: 'https://github.com/sieraford/pantry-pal'
        },
        {
            name: 'weather-app',
            description: 'Server API App',
            link: 'https://tobin-matt.github.io/weather-forecast-dashboard/',
            gitHub: 'https://github.com/Tobin-Matt/weather-forecast-dashboard'
        },
        {
            name: 'note-taker',
            description: 'Express.js App',
            link: 'https://sleepy-savannah-64922.herokuapp.com/',
            gitHub: 'https://github.com/Tobin-Matt/express.js-note-taker'
        },
        {
            name: 'social-network-api',
            description: 'Social Network API',
            link: 'https://github.com/Tobin-Matt/social-network-api',
            gitHub: 'https://github.com/Tobin-Matt/social-network-api'
        },
        {
            name: 'sql-employee-tracker',
            description: 'SQL Employee Tracker',
            link: 'https://github.com/Tobin-Matt/sql-employee-tracker',
            gitHub: 'https://github.com/Tobin-Matt/sql-employee-tracker'
        },
        {
            name: 'note-taker',
            description: 'Express.js App',
            link: 'https://sleepy-savannah-64922.herokuapp.com/',
            gitHub: 'https://github.com/Tobin-Matt/express.js-note-taker'
        },
    ]) 

    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8'>
            {projects.map((projects, index) => (
                <Project 
                    key={index} 
                    name={projects.name} 
                    description={projects.description} 
                    link={projects.link}
                    gitHub={projects.gitHub}
                />
            ))}
        </div>
    )
}

export default Portfolio;