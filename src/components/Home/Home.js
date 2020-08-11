import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__hero">
        <h1>Never drink bad wine again</h1>
        <form className="Home__hero__form">
          <input type="search" name="query" aria-label="query" />
          <input type="submit" aria-label="Search" value="Search" />
        </form>
      </div>
    </div>
  );
};

export default Home;
