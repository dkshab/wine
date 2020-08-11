import React, { useEffect, useState } from "react";

import { useCurrentUserValue } from "../../context";

//const initialState = { email: "", displayName: "", isProducer: "" };

const UpdateProfile = () => {
  const [state, setState] = useState({});

  const user = useCurrentUserValue();
  console.log(user);

  useEffect(() => {
    if (user) {
      console.log(user);
      setState({ ...user, error: null });
    }
  }, [user]);

  return (
    <div>
      {user && (
        <form>
          <div className="field">
            <label htmlFor="" className="item1">
              Display Name
            </label>
          </div>
          <div className="field">
            <label htmlFor="" className="item1">
              Email
            </label>
          </div>
          <div className="field">
            <label htmlFor="" className="item1">
              City
            </label>
          </div>
          <div className="field">
            <label htmlFor="" className="item1">
              Producer ?
            </label>
          </div>
          <div className="field">
            <label htmlFor="" className="item1"></label>
          </div>
        </form>
      )}

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default UpdateProfile;
