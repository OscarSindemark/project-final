import React from 'react';
import Header from '../components/Header';
import { GamesList } from '../components/AllTags';


const Games = () => {
  return (
    <>
    <h1 className='game-list-text'>Full Game List</h1>
    <GamesList />
    </>
  )
}

export default Games