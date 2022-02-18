import { useState, useEffect } from "react";
import CharacterSelector from "../components/CharacterSelector";
import CharacterDetail from "../components/CharacterDetail";
import FavouriteCharacters from "../components/FavouriteCharacters";

const CharactersContainer = () => {

    const [allCharacters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [favouriteCharacters, setFavouriteCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = function(){
        const range = Array.from(Array(826).keys(), n => n + 1)
        fetch(`https://rickandmortyapi.com/api/character/${range}`)
        .then(result => result.json())
        .then(data => setCharacters(data))
    }

    const onCharacterClick = function(character){
        setSelectedCharacter(character);
    }

    const onButtonClick = function(character){
        const newFavouriteCharacters = Array.from(new Set([...favouriteCharacters, character]));
        setFavouriteCharacters(newFavouriteCharacters);
    }

    return (
        <div className='characters-container'>
            <h1>Rick and Morty Characters</h1>
            <CharacterSelector allCharacters={allCharacters} onCharacterClick={onCharacterClick} />
            {selectedCharacter ? <CharacterDetail character={selectedCharacter} onButtonClick={onButtonClick} /> : null}
            <FavouriteCharacters favouriteCharacters={favouriteCharacters} />
        </div>
    )
}

export default CharactersContainer;