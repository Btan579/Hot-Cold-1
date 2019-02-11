import React from 'react';

import './nav-bar.css';

export default function NavBar(props) {
    return (
        <nav>
            <ul className="clearfix">
            <li>
                <a href="#what"
                className="what"
                > What?</a>
            </li>
            <li>
                <a
            href="#feedback"
            className="new"
            onClick={() => props.onRestartGame()}
          >
            + New Game
          </a>
            </li>
            </ul>
        </nav>
    );
}