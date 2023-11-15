import React from 'react';
import './../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';




function HeroSection() {
  
  return (
    <div className='hero-container'>
       
     
      <h1>WELLCOME TO CODE EDITOR</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         <Link to="/login" className='log'> LOG-IN</Link>
        </Button>
       
      <Link to="/Rigistation"> <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SIGN-UP<i className='far fa-play-circle' />
        </Button></Link> 
      </div>
    </div>
  );
}

export default HeroSection;