import React from 'react';

import GuessBox from '/.guess-box';
import StatusBox from './status-box';
import Header from './header';
import InfoBox from './info-box';

export default class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             guesses: [],
             secretNumber: Math.floor((Math.random() * 100) + 1),
             feedback: 'Make a guess!'
        };
    }

    makeGuess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({ feedback: 'Please enter a valid number'});
            return;
        }

        const difference = Math.abs(guess - this.state.secretNumber);

        let feedback;

        if (difference >= 50) {
            feedback = 'You\'re Freezing...';
        } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You burst into flames!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });

    }

    restartGame() {
        this.setState({
            guesses: [],
            secretNumber: Math.floor((Math.random() * 100) + 1),
            feedback: 'Make a guess!'
        });
    }

     render() {
        
        return (
            <div>
                <Header
                onRestartGame={() => this.restartGame()}
                />
                <main role="main">
                <GuessBox
                feedback={feedback}
                guessCount={guessCount}
                onMakeGuess={guess => this.makeGuess(guess)}
                />
                <StatusBox guesses={guesses}
                />
                <InfoBox />
                </main>
            </div>
        );
    }
}