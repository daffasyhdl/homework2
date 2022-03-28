import React from 'react'
import Playlist from './Playlist';
import data from '../../data/index';

function Home() {
  return (
    <div className='home'>
      <div className='albums'>
        {data.map((item) => {
          return (
            <Playlist
              key={item.id}
              url={item.album.images[0].url}
              title={item.name}
              artist={item.artists[0].name}
              album={item.album.name} />
          )
        })}
      </div>
    </div>
  );
}

export default Home