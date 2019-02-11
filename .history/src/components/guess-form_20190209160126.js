import React from 'react';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        e.preventDefault();
        const guess = this.textInput.value;
        console.log(guess);
        this.props.makeGuess(this.textInput.value);
        
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
