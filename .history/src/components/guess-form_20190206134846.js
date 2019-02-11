import React from 'react';

export default function GuessForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="guess">Search</label>&emsp;
            <input type="text" id="guess" name="guess" placeholder="Enter a Guess" 
                onChange={e => props.onChange(e.target.value)} />
        </form>
    );
}
