import React from 'react'
import reactLogoGrey from '../assets/react-grey.png'

function Main(props) {
    const {darkMode} = props
    return (
        <main className={`main ${darkMode ? `main--dark` : `main--ligth`}`}>
            <h2 className='main__title'>
            Fun facts about React
            </h2>
            <ul className='main__list'>
                <li className='main__list-item'>Was first released in 2013</li>
                <li className='main__list-item'>Was originally created by Jordan Walke</li>
                <li className='main__list-item'>Has well over 100K stars on GitHub</li>
                <li className='main__list-item'>Is maintained by Facebook</li>
                <li className='main__list-item'>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img className='main__react-logo' src={reactLogoGrey} alt="react logo" />
        </main>
    )
}

export default Main