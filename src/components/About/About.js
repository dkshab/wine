import React from "react";
import useSetState from "../../utilities/useSetState";

const initialState = {
  currentJobTitle: "",
  currentCompany: "",
  currentEmployment: "",
  currentJobStartDate: "",
  currentJobEndDate: "",
  currentJobType: "",
  currentJobIndustry: "",
};

const About = () => {
  const [state, setState] = useSetState(initialState);

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(state);
    clear();
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <div className="About">
      <h2>The About Testing Page</h2>
      <form onSubmit={handleSubmit} className="About__form">
        <h3>Work Experience</h3>
        <h4>Current or Last Employment</h4>
        <div className="field">
          <label htmlFor="currentJobTitle" className="item1">
            Job Title
          </label>
          <input
            type="text"
            name="currentJobTitle"
            className="item2"
            value={state.currentJobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="currentCompany" className="item1">
            Company Name
          </label>
          <input
            type="text"
            name="currentCompany"
            className="item2"
            value={state.currentCompany}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="item1" htmlFor="currentEmployment">
            Current Employment ?
          </label>
          <select
            name="currentEmployment"
            value={state.currentEmployment}
            onChange={handleChange}
          >
            <option defaultValue>Select one...</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="currentJobStartDate" className="item1">
            Start Date
          </label>
          <input
            type="text"
            name="currentJobStartDate"
            className="item2"
            value={state.currentJobStartDate}
            onChange={handleChange}
          />
        </div>
        {state.currentEmployment === "No" && (
          <div className="field">
            <label htmlFor="currentJobEndDate" className="item1">
              End Date
            </label>
            <input
              type="text"
              name="currentJobEndDate"
              className="item2"
              value={state.currentJobEndDate}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="field">
          <label htmlFor="currentJobIndustry" className="item1">
            Industry
          </label>
          <input
            type="text"
            name="currentJobIndustry"
            className="item2"
            value={state.currentJobIndustry}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="currentJobType" className="item1">
            Work Type
          </label>
          <select
            className="item2 select-css"
            name="currentJobType"
            value={state.currentJobType}
            onChange={handleChange}
          >
            <option defaultValue>Select one...</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>
        <div className="buttons">
          <button>Submit</button>
        </div>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default About;
