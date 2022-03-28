import React from 'react'
import './Playlist.css';

const Playlist = ({ key, url, title, artist, album }) => {
    return (
        <div className="playlist">
            <div className='container' key={key}>
                <h4 className='title'>{title}</h4>
                <img className='image' src={url} alt="image" />
                <h4 className='artist'>{artist}</h4>
                <h6 className='album'>{album}</h6>
            </div>
        </div>
    );
}

export default Playlist
