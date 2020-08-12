import React from "react";
import { IconButton } from "@material-ui/core";
import { Star, Apartment, RemoveRedEyeOutlined, SignalWifiOffSharp, FunctionsOutlined } from "@material-ui/icons";

import "../Styles/cards-footer.scss";

const CardSwiperFooter = () => {
  return (
    <div className="cards-footer-container">
      <IconButton>
        <Star fontSize="large" />
      </IconButton>
      <IconButton>
        <Apartment fontSize="large" />
      </IconButton>
      <IconButton>
        <RemoveRedEyeOutlined fontSize="large" />
      </IconButton>
      <IconButton>
        <SignalWifiOffSharp fontSize="large" />
      </IconButton>
      <IconButton>
        <FunctionsOutlined fontSize="large" />
      </IconButton>
    </div>
  );
};

export default CardSwiperFooter;
