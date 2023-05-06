import React from 'react';
import logo from '../assets/JE_Logo.png';

const Splash = () => {
  return (
    <div>
      <div className='container'>
        <img className='logo' src={logo} alt='JE Logo Black Hexagon' />
      </div>
      <div className='container'>
        <h1 className='splashName'>Jennifer Engle</h1>
      </div>
      <div className='splashTitle'>Full Stack Software Developer</div>
    </div>
  )
}

export default Splash;