import React from "react";
import "./styles/searchJob.css";

function SearchJob() {
  return (
    <div className="searchjob-container">
      <form className="searchjob-form">
        <input
          className="searchjob-input"
          type="text"
          name="search-job"
          id="search-job"
        />
        <button className="searchjob-btn" type="submit">
          Find Me a Job
        </button>
      </form>
    </div>
  );
}

export default SearchJob;
