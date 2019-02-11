import React from 'react';

import GuessForm from './guess-form';

export default class GuessBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userGuess: ''
        }
    }

    render() {
        const characters = this.props.characters.filter(character =>
            character.name.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        );
        return (
            <div className="live-search">
                <SearchForm onChange={searchTerm => this.setState({searchTerm})} />
                <CharacterList characters={characters} />
            </div>
        );
    }
}