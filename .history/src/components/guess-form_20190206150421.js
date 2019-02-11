import React from 'react';

export default function GuessForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="guess">Guess</label>&emsp;
            < input type = "text"
            id = "userGuess"
            name = "userGuess"
            class = "text"
            maxLength="3"
            autoComplete="off"
            placeholder = "Enter a Guess"
            required
                />
            <input type="submit" id="guessButton" class="button" name="submit" value="Guess" 
            onSubmit={e => props.onSubmit(e.target.value)}></input>
        </form>
    );
}
