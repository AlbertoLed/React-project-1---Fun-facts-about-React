import reactLogo from '../assets/react.svg'

import React from 'react';


function Navbar(props) {
    const {darkMode, toggleDarkMode} = props
    
    return (
        <header className={`head ${darkMode ? `head--dark` : `head--ligth`}`}>
            <img src={reactLogo} alt="react logo" />
            <h1 className='title'>ReactFacts</h1>
            <div className='toggler'>
                <p className='toggler__text'>Ligth</p>
                <div 
                    onClick={toggleDarkMode}
                    className={`toggler__slider ${darkMode ? `toggler__slider--dark` : `toggler__slider--ligth`}`}>
                    <div className='toggler__circle'></div>
                </div>
                <p className='toggler__text'>Dark</p>
            </div>
        </header>
    );
}

export default Navbar
