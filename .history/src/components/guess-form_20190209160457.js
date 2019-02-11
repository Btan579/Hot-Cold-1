import React from 'react';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
    }

    makeGuess(e) {
        e.preventDefault();
        const guess = this.textInput.value;
        
        this.props.makeGuess(guess);
        
    }
    
    render () {

        return (
        <form onSubmit={(e) => this.makeGuess(e)}>  
            <input type = "text" id = "userGuess" name = "userGuess" className = "text" maxLength="3" autoComplete="off" placeholder = "Enter a Guess" required ref = {input => this.textInput = input} />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" ></input>
        </form>
    );
    }

    
}
