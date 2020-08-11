import React from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../../utilities/firebase";
import useSetState from "../../utilities/useSetState";
import * as ROUTES from "../../constants/routes";

const initialState = {
  displayName: "",
  email: "",

  password: "",
  confirmPassword: "",
  isValid: true,
  error: null,
};

const SignUp = () => {
  const [state, setState] = useSetState(initialState);
  const history = useHistory();

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Passwords Do not Match");
    } else {
      try {
        await auth.createUserWithEmailAndPassword(email, password);

        clear();
        history.push(ROUTES.HOME);
      } catch (error) {
        console.error(error);
        setState({ error: error });
      }
    }
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="item1" htmlFor="displayName">
            Display Name
          </label>
          <input
            className="item2"
            type="text"
            name="displayName"
            value={state.displayName}
            onChange={handleChange}
            required
          />
        </div>
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
            required
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
            required
          />
        </div>
        <div className="field">
          <label className="item1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="item2"
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buttons">
          <button className="signup" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      {state.error && <p>{state.error.message}</p>}
    </div>
  );
};

export default SignUp;
