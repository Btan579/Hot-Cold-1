import React from 'react';

import NavBar from './nav-bar';

import './header.css';


export default function Header(props)   {
    return (
        <header>
            <NavBar
                onRestartGame={() => props.onRestartGame()}
            />
            <h1>HOT or COLD</h1>
        </header>
    );
}