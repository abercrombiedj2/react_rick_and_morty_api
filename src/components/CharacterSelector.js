const CharacterSelector = ({allCharacters, onCharacterClick}) => {

    const handleCharacterChange = function(event){
        const selectedCharacter = allCharacters[event.target.value];
        onCharacterClick(selectedCharacter);
    }

    const characterNodes = allCharacters.map((character, index) => {
        return <option key={index} value={index}>{character.name}</option>
    })

    return (
        <div className='character-selector'>
            <select defaultValue='' onChange={handleCharacterChange}>
                <option value=''>Select a character</option>
                {characterNodes}
            </select>
        </div>
    )
}

export default CharacterSelector;