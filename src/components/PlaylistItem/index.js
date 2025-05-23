import './index.css'
const PlaylistItem = props => {
  const {playlistItem, deleteItemClicked} = props
  const {id, imageUrl, name, genre, duration} = playlistItem
  const ondelete = () => {
    deleteItemClicked(id)
  }
  return (
    <li className="itemContainer">
      <div className="firstSection">
        <div className="imageContainer">
          <img className="imageEl" src={imageUrl} alt="track" />
        </div>
        <div className="detailsContainer">
          <p className="nameContainer">{name}</p>
          <p className="genreContainer">{genre}</p>
        </div>
      </div>

      <div className="secondSection">
        <div className="durationContainer">
          <p className="duration">{duration}</p>
        </div>
        <div className="deleteContainer">
          <button onClick={ondelete} data-testid="delete">
            <img
              className="delete"
              src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PlaylistItem
