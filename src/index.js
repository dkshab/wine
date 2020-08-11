import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import Application from "./components/Application/Application";
import { CurrentUserProvider } from "./context/currentUser-context";

render(
  <Router>
    <CurrentUserProvider>
      <Application />
    </CurrentUserProvider>
  </Router>,
  document.getElementById("root")
);
