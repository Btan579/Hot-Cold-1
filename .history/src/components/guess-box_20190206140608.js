import React from 'react';

import GuessForm from './guess-form';

export default class GuessBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userGuesses: '',
            secretNumber: generateSecret()
        }
    }

    generateSecret(secretNumber) {
        secretNumber = Math.floor((Math.random() * 100) + 1);
        this.setState({
            secretNumber 
        });

    }

    render() {
        console.log(this.state.secretNumber);
     
        return (
            
            <div className="guess-box">
                <GuessForm onSubmit={userGuess => this.setState({userGuess})} />
             
            </div>
        );
    }
}