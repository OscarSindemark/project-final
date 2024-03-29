import React from "react";
import games from "../data/games"
import { Link } from "react-router-dom";
import "./AllTags.css"


export const GamesList = () => {
    return (
        <section className="game-list">
        <>
        {games.map((game, index) => (
            <Link className="game-card"
            key={index}
            to={`/games/${game.id}`}
             >
                <p className="game-name">{game.name}</p>
            <img src={game.image} className="game-img"/>
            
         </Link>
        ))}
   </> </section>
   )
}