import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    const pluralGuess = props.guessCount !== 1;
    const guessNoun = pluralGuess ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}