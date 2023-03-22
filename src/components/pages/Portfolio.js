import React, { useState } from 'react';
import Project from './Project';


function Portfolio() {
    const [projects, setProjects] = useState([
        {
            name: 'Pantry Pal',
            description: 'MVC Full Stack',
            link: 'https://the-pantry-pal.herokuapp.com/landing',
            gitHub: 'https://github.com/sieraford/pantry-pal'
        },
        {
            name: 'Weather App',
            description: 'Server API App',
            link: 'https://tobin-matt.github.io/weather-forecast-dashboard/',
            gitHub: 'https://github.com/Tobin-Matt/weather-forecast-dashboard'
        },
        {
            name: 'Note Taker',
            description: 'Express.js App',
            link: 'https://sleepy-savannah-64922.herokuapp.com/',
            gitHub: 'https://github.com/Tobin-Matt/express.js-note-taker'
        },
    ]) 

    return (
        <div>
            {projects.map((projects, index) => (
                <Project 
                    key={index} 
                    name={projects.name} 
                    descriptio={projects.description} 
                    link={projects.link}
                    gitHub={projects.gitHub}
                />
            ))}
        </div>
    )
}

export default Portfolio;