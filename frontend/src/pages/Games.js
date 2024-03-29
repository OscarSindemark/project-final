import React from 'react';
import { GamesList } from '../components/AllTags';
import HomeCarouselCard from 'components/Carousels/HomeCarouselCard';
import games from '../data/games';

// all games page
const Games = () => {
  return (
    <>
    <h1 className='game-list-text text-[36px] font-bold'>Full Game List</h1>
    {/* <GamesList /> */}
    <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
    {games.map((game, index) => (
    <HomeCarouselCard
    img={game.image}
    key={index}
    name={game.name}
    genre={game.genre}
    free={game.free}
    platform={game.platform}
    releaseDate={game.release_date}
    />
    ))}
    </div>
    </>
  )
}

export default Games