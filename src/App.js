import React, { useState } from "react";

import Header from "./components/header/Header";
import SearchForm from "./components/search-form/SearchForm";
import JobsPagination from "./components/jobs-pagination/JobsPagination";
import UseFetchJobs from "./components/use-fetch-jobs/UseFetchJobs";
import Job from "./components/job/Job";

import loadingImg from "./assets/loading.gif";

import "./App.css";

const App = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = UseFetchJobs(params, page);

  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <React.Fragment>
      <Header />
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && (
        <div className="spinner">
          <img className="loading-img" src={loadingImg} alt="" />
        </div>
      )}
      {error && <h1>Error.Try Refreshing</h1>}
      <div className="container">
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </React.Fragment>
  );
};

export default App;
