import React from 'react';
import Header from '../components/Header';
import { GamesList } from '../components/AllTags';
import HomeCarouselCard from 'components/Carousels/HomeCarouselCard';
import games from '../data/games';


const Games = () => {
  return (
    <>
    <h1 className='game-list-text'>Full Game List</h1>
    {/* <GamesList /> */}
    <div className="container grid-cols-3 gap-x-14 gap-y-3">
    {games.map((game, index) => (
    <HomeCarouselCard
    img={game.image}
    key={index}
    name={game.name}
    genre={game.genre}
    free={game.free}
    platform={game.platform}
    releaseDate={game.release_date} />
    ))}
    </div>
    </>
  )
}

export default Games