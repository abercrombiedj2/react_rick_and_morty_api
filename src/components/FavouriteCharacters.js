const FavouriteCharacters = ({favouriteCharacters}) => {

    const characterNodes = favouriteCharacters.map((character, index) => {
    return <li key={index}>{character.name}</li>
    })

    return (
        <div className='favourite-characters'>
            <h3>Your Favourite Characters</h3>
            <ul>
                {characterNodes}
            </ul>
        </div>
    )
}

export default FavouriteCharacters;