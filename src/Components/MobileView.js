import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import TinderCardsSwiper from "./TinderCardsSwiper";
import "../Styles/mobile-view.scss";

const MobileView = () => {
  const location = useLocation();

  return (
    <div className="mobile-view">
      <Header />
      <Switch location={location}>
        <Route path="/" exact>
          <TinderCardsSwiper />
        </Route>
        <Route path="/profile">
          <button>Profile</button>
        </Route>
        <Route path="/chat">
          <button>Chat</button>
        </Route>
      </Switch>
    </div>
  );
};

export default MobileView;
