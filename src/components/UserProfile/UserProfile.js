import React from "react";

import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      Racial Profiling and fear.......
      <p>
        Fix your fear right <Link to={ROUTES.UPDATE_PROFILE}>here</Link>
      </p>
    </div>
  );
};

export default UserProfile;
