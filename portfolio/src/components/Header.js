//Header
import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    console.log(props);
    // The return statement contains something called "JSX"
    // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
    // Expressions in JSX should be placed in curly braces {}
    return (
        //build the html
        <header>
            {/* <h1>{props.firstName} {props.lastName}</h1> */}
            <Navigation setPage={props.setPage}/>
        </header>
        
    )
}

export default Header;

// pass in parameter called props inside the function Header -- props is a parameter not a argument -- properties