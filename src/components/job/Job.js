import React, { useState } from "react";

import { Button, Collapse } from "react-bootstrap";

import img from "../../assets/image.png";

import "./job.style.css";

const Job = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="job">
      <div className="card">
        <h3 className="job-title">{job.title}</h3>
        <div className="logo">
          {job.company_logo ? (
            <img
              className="company-logo"
              src={job.company_logo}
              alt={job.company}
            />
          ) : (
            <img className="company-logo" src={img} alt={img} />
          )}
        </div>
        <h5 className="company">{job.company}</h5>

        <div className="badge">
          <h5 className="type">{job.type}</h5>
          <h5 className="location">{job.location}</h5>
        </div>
        <h5 className="date">
          {new Date(job.created_at).toLocaleDateString()}
        </h5>
        <a href={job.url} target="_blank">
          Description
        </a>
      </div>
      <div className="btn">
        <Button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          variant="primary"
        >
          {" "}
          {open ? "Hide Details" : "View Details"}
        </Button>
      </div>
      <Collapse in={open}>
        <div className="detail">
          <a href={job.url} target="_blank">
            {job.url}
          </a>
        </div>
      </Collapse>
    </div>
  );
};

export default Job;
