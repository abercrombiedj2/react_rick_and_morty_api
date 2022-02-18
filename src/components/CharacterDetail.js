const CharacterDetail = ({character, onButtonClick}) => {

    const handleButtonClick = function(event){
        onButtonClick(character);
    }

    return (
        <div className='character-detail'>
            <img src={character.image} />
            <h2>{character.name}</h2>
            <ul>
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                <li>Status: {character.status}</li>
                <li>Location: {character.location.name}</li>
                <li>Origin: {character.origin.name}</li>
            </ul>
            <button value={character} onClick={handleButtonClick}>Add to Favourite Characters</button>
        </div>
    )
}

export default CharacterDetail;