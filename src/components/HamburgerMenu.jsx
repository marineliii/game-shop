/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ onClick }) => {
    return (
        <div className="hamburger-icon" onClick={onClick}>
            <div key='empty'></div>
            <div key='2'></div>
            <div key='3'></div>
        </div>
    );
};

export default HamburgerMenu;
