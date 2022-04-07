import React from 'react'
import './Playlist.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'

const Playlist = ({ key, url, title, artist, album }) => {
    return (
        <div className="container-main">
            <div className="container-card">
                <Card className="card" style={{ width: '21rem' }}>
                    <Card.Body>
                        <div key={key}>
                            <h1 className='title'>{title}</h1>
                            <img className='image' src={url} alt="image" />
                            <h4 className='artist'>{artist}</h4>
                            <h6 className='album'>{album}</h6>
                            <Button className='btn-select' size="sm" variant="outline-primary">Select</Button>{' '}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Playlist
