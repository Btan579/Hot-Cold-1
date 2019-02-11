import React from 'react';

import GuessForm from './guess-form';

export default class GuessBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         userGuessList: [],
         secretNumber: Math.floor((Math.random() * 100) + 1),
         correctGuess: false
        };
    }

    makeGuess(guess) {
        this.setState({
            userGuessList: [...this.state.userGuessList, { guess }],
        });

        if(this.state.secretNumber === guess){
            this.setState({
                correctGuess: true
            });
        }
        console.log(this.state.correctGuess);
        console.log(this.state);
        console.log(guess);
    }


    render() {
        
        return (

            <div className = "guess-box" >
                <header>
                    <nav></nav>
                    <h1>HOT or COLD</h1>
                </header>
                <h2 id="feedback"></h2>
                <section className="game">
                   
                        <GuessForm makeGuess={text => this.makeGuess(text)} />
                  
                    <p>Guess # <span id="count"></span>!</p>
                    <ul id="guessList"></ul>
                </section> 
            </div> 
        );
    }
}