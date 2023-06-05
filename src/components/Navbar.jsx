import reactLogo from '../assets/react.svg'

import React from 'react';


function Navbar() {
    return (
        <header className='head'>
            <img src={reactLogo} alt="react logo" />
            <h1 className='title'>ReactFacts</h1>
            <p className='subtitle'>React Course - Project 1</p>
        </header>
    );
}

export default Navbar
