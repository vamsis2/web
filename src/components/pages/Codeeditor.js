import React from 'react'
import HeroSection from '../HeroSection'
import video3 from "./video3.mp4"


function Codeeditor() {
    return (
        <>
       <video src={video3} alt={video3}autoPlay loop muted className='video' />
        <HeroSection/>
        
        </>  
    )
}

export default Codeeditor;
