import React from 'react';

import GuessForm from './guess-form';

export default class GuessBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userGuesses: '',
            secretNumber: Math.floor((Math.random() * 100) + 1)
        }
    }

    // generateSecret(secretNumber) {
    //     secretNumber = Math.floor((Math.random() * 100) + 1);
    //     this.setState({
    //         secretNumber 
    //     });

    // }

    render() {
        
     
        return (
            <header>
                {/* <nav></nav> */}
                <h1>HOT or COLD</h1>
            </header>
            <section class="game">
                <h2 id="feedback"></h2>
                    <div className="guess-box">
                        <GuessForm onSubmit={userGuess => this.setState({userGuess})} />
             
                    </div>
            </section>
        );
    }
}