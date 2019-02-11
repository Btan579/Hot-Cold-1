import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        this.props.makeGuess(this.textInput.value);

        if (this.props.onMakeGuess) {
            const value = this.input.value;
            this.props.onMakeGuess(value);
        }
        this.input.value = '';
        this.input.focus();
        
    }
    
    render () {
        return (
        <form onSubmit={(e) => this.onSubmit(e)}>  
            <input type = "text" id = "userGuess" name = "userGuess" className = "text" maxLength="3" autoComplete="off" placeholder = "Enter a Guess" required ref = {input => this.input = input} />
            <button type="submit" id="guessButton" className="button" name="submit"> Guess </button>
        </form>
    );
    }

    
}
