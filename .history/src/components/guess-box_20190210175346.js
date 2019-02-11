import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessBox(props) {
  const { feedback, guessCount } = props;
  return (
    <section label="Guess box">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}