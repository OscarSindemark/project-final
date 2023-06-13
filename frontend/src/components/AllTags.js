import React from "react";
import games from "../data/games.json"


const GamesList = () => {
    games.map((gameList) => {
       return <div key={gameList.id}>
            {gameList.name}
        {gameList.image[1]}
          </div>
    })
}

export default GamesList