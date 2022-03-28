import React from 'react'

const Playlist = ({key, url, title, artist, album }) => {
    return (
        <div key ={key}>
            <img src={url} alt="image" />
            <h3>{title}</h3>
            <h4>{artist}</h4>
            <h6>{album}</h6>
        </div>
    );
}

export default Playlist
