import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
    return (
        <header>
        <div className='left-div'>
            <div className='logo'>
                <div>
                    <Link className='link' to="/">Notes</Link>
                </div>
            </div>
        </div>
        <div className='links'>
            <ul>
                <li>
                    <Link className='link' to="/about">About</Link>
                </li>
                <li>
                   <Link className='link' to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    </header>
    )
}

export default Header