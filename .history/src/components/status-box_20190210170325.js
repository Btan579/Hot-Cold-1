import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';

export default function StatusBox(props) {

    const {guesses} = props;
    const guessCount = guesses.length;

    return (
        <section label="guessCount">
        <GuessCount guessCount={guessCount} />
        <GuessList guesses={guesses} />
        </section>

    );
}