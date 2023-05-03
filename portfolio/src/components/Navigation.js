import React from 'react';

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.textContent);
    props.setPage(e.target.textContent);

  } 
    return (
    <nav>
        <ul class="navInline">
            <li onClick={handleClick}>Projects</li>
            <li onClick={handleClick}>About</li>
            <li onClick={handleClick}>Resume</li>
        </ul>
    </nav>
  )
}

export default Navigation;


// e = event