import React from 'react';

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.textContent);
    props.setPage(e.target.textContent);

  } 
    return (
    <nav className='navBar'>
        <ul className="navInline">
            <li onClick={handleClick}>About</li>
            <li onClick={handleClick}>Projects</li>
            <li onClick={handleClick}>Resume</li>
            <li onClick={handleClick}>Home</li>
        </ul>
    </nav>
  )
}

export default Navigation;


// e = event