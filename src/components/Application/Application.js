import React from "react";
import { Switch, Route } from "react-router-dom";

import "../../sass/styles.scss";
import * as ROUTES from "../../constants/routes";

import Home from "../Home/Home";
import NavBarAuth from "../NavBarAuth/NavBarAuth";
import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import SignInAndSignUp from "../SignInAndSignUp/SignInAndSignUp";
import UserProfile from "../UserProfile/UserProfile";
import UpdateProfile from "../UpdateProfile/UpdateProfile";

const Application = () => {
  return (
    <div className="Application">
      <NavBarAuth />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.SIGNIN} component={SignInAndSignUp} />
        <Route path={ROUTES.PROFILE} component={UserProfile} />
        <Route path={ROUTES.UPDATE_PROFILE} component={UpdateProfile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Application;
