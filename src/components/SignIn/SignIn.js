import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import useSetState from "../../utilities/useSetState";
import { auth } from "../../utilities/firebase";

const initialState = { email: "", password: "", error: null };

const SignIn = () => {
  const [state, setState] = useSetState(initialState);
  const history = useHistory();

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;

    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        clear();
      })
      .then(() => {
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        clear();
        setState({ error: error });
      });

    clear();
  };

  const clear = () => {
    setState(initialState);
  };
  return (
    <div className="SignIn">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="item1" htmlFor="email">
            Email
          </label>
          <input
            className="item2"
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="item1" htmlFor="password">
            Password
          </label>
          <input
            className="item2"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="pw-links">
          <p>
            <Link to={ROUTES.PASSWORD_FORGET}>Forgot password?</Link>
          </p>
          <p>
            <Link to={ROUTES.PASSWORD_CHANGE}>Change your password?</Link>
          </p>
        </div>
        <div className="buttons">
          <button
            className="signin"
            aria-label="signin"
            data-testid="signin"
            name="signin"
            type="submit"
          >
            Sign In
          </button>
          {/* <button>Sign In With Google</button> */}
        </div>
      </form>
      {state.error && <p>{state.error.message}</p>}
    </div>
  );
};

export default SignIn;
