function DisplayLyrics({ onDisplay }) {
    return <button className="lyrics-item__button" onClick={event => {
        event.stopPropagation()

        onDisplay(trackId)
    }}>{<i className="far fa-eye"></i>}</button>
}