import React from 'react';

export default function GuessForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="guess">Guess</label>&emsp;
            <input type="text" id="guess" name="guess" placeholder="Enter a Guess" 
                onSubmit={e => props.onSubmit(e.target.value)} />
        </form>
    );
}
