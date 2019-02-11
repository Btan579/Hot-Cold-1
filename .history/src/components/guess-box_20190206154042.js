import React from 'react';

import GuessForm from './guess-form';

export default class GuessBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userGuessList: [],
            secretNumber: Math.floor((Math.random() * 100) + 1)
        };
    }

    addGuess(userGuess) {
        this.setState({
            userGuessList: [...this.state.lists, {userGuess}]
        });
    }

    // generateSecret(secretNumber) {
    //     secretNumber = Math.floor((Math.random() * 100) + 1);
    //     this.setState({
    //         secretNumber 
    //     });

    // }

    render() {
        
        return (

            <div className = "guess-box" >
                <header>
                    <nav></nav>
                    <h1>HOT or COLD</h1>
                </header>
                <h2 id="feedback"></h2>
                <section class="game">
                    <form >
                        <GuessForm onSubmit={userGuess => this.setState({userGuess})} />
                    </form>
                    <p>Guess # <span id="count"></span>!</p>
                    <ul id="guessList"></ul>
                </section> 
            </div> 
        );
    }
}