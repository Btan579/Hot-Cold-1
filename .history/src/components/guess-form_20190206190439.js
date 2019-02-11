import React from 'react';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
    }

    makeGuess(e) {
        e.preventDefault();
        this.props.makeGuess(this.textInput.value())
    }
    
    render () {

        return (
        <form    onSubmit={(e) => this.makeGuess(e)>
     
            < input type = "text"
            id = "userGuess"
            name = "userGuess"
            class = "text"
            maxLength="3"
            autoComplete="off"
            placeholder = "Enter a Guess"
            required
                />
            <input type="submit" id="guessButton" class="button" name="submit" value="Guess" ></input>
        </form>
    );
    }

    
}
