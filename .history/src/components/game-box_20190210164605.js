import React from 'react';

import GuessBox from '/.guess-box';
import StatusBox from './status-box';
import Header from './header';
import InfoBox from './info-box';

export default class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             userGuessList: [],
             secretNumber: Math.floor((Math.random() * 100) + 1)
        };
    }

    makeGuess(guess) {
        this.setState({
            userGuessList: [...this.state.userGuessList, {
                guess
            }],
        });

        if (this.state.secretNumber == guess) {
            this.setState({
                correctGuess: true
            });
        }
      
    }

    restartGame() {
        this.setState({
            userGuessList: [],
            secretNumber: Math.floor((Math.random() * 100) + 1)
        });
    }

     render() {
        
        return (

            <div>
                <header>
                    <nav></nav>
                    <h1>HOT or COLD</h1>
                </header>
                <main role="main">
                <GuessBox 
                feedback={feedback}
                guessCount={guessCount}
                makeGuess={text => this.makeGuess(text)}               
                />
                
            
                    

                
                </main>
            </div> 
        );
    }



}