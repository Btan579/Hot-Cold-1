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

            < div className = "guess-box" >
            <header>
                
                <h1>HOT or COLD</h1>
            </header>
            
                <h2 ></h2>
                    
                    <form >
                    <GuessForm onSubmit={userGuess => this.setState({userGuess})} />
                    </form>
                        
                    </div>
           
        );
    }
}