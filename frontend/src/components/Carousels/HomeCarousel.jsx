import React, { Component } from "react";
import Slider from "react-slick";
import games from "../../data/games"
import HomeCarouselCard from "./HomeCarouselCard";

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    console.log(games)
    return (
      <div>
        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}