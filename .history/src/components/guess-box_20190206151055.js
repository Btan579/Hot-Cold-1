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
                
                <h1>HOT or COLD</h1>
            </header>
            <section className="game">
                <h2 id="feedback"></h2>
                    <div className="guess-box">
                    <form className="guess-form">
                    <GuessForm onSubmit={userGuess => this.setState({userGuess})} />
                    </form>
                        
             
                    </div>
            </section>
        );
    }
}