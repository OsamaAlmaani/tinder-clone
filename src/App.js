import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import debounce from "lodash.debounce";

import WebView from "./Components/WebView";
import MobileView from "./Components/MobileView";

function App() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", debounce(checkScreenSize, 200));
    checkScreenSize();
  }, []);

  const checkScreenSize = () => {
    // TODO: Create the web layout once mobile view is done
    setMobileView(window.innerWidth < /*750*/ 2020);
  };

  return mobileView ? <MobileView /> : <WebView />;
}

export default App;
