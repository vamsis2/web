import React from 'react'
import '../../App.css';
import video1 from "./video1.mp4"
function About() {
    return (
        <div>
            
            <video src={video1} alt={video1}autoPlay loop muted className='video' />
        </div>
        
    )
}

export default About

