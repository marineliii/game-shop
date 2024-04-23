/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SideMenuBar.css'

const SideMenuBar = ({ years, onClick }) => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`side-menu-bar ${menuOpen ? 'open' : ''}`}>
            <div className="hamburger-icon" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ol>
                {years.map(year => (
                    <li key={year} onClick={() => onClick(year)}>{year}</li>
                ))}
            </ol>
        </div>
    );
}

export default SideMenuBar;
