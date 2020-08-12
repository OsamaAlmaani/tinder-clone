import React from "react";
import { IconButton } from "@material-ui/core";
import { Person, CameraEnhance, ChatBubble } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import "../Styles/header.scss";

const Header = () => {
  const router = useHistory();

  const handleRoutes = path => () => {
    if (path !== router.location.pathname) router.push(path);
  };

  return (
    <div className="mobile-view-header">
      <IconButton onClick={handleRoutes("/profile")}>
        <Person fontSize="large" />
      </IconButton>
      <IconButton onClick={handleRoutes("/")}>
        <CameraEnhance fontSize="large" />
      </IconButton>
      <IconButton onClick={handleRoutes("/chat")}>
        <ChatBubble fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
