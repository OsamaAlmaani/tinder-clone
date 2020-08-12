import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import CardSwiperFooter from "./CardSwiperFooter";
import "../Styles/tinder-card-swiper.scss";

const TinderCardsSwiper = () => {
  // TODO: Replace with actual datastore
  const [cards, setCards] = useState([
    { id: 1, title: "Title 1", url: "https://source.unsplash.com/1600x900/?face" },
    { id: 2, title: "Title 2", url: "https://source.unsplash.com/1600x900/?face1" },
    { id: 3, title: "Title 3", url: "https://source.unsplash.com/1600x900/?face2" },
    { id: 4, title: "Title 4", url: "https://source.unsplash.com/1600x900/?face3" },
    { id: 5, title: "Title 5", url: "https://source.unsplash.com/1600x900/?face4" }
  ]);

  const onSwipe = direction => {
    console.log(direction);
  };

  return (
    <>
      <div className="card-swiper-container">
        {cards.map(card => (
          <TinderCard key={card.id} onSwipe={onSwipe} preventSwipe={["up", "down"]} className="card-container">
            <div className="img" style={{ backgroundImage: `url(${card.url})` }} />
          </TinderCard>
        ))}
      </div>
      <CardSwiperFooter />
    </>
  );
};

export default TinderCardsSwiper;
