import React from "react";
import jobIcon from "../assets/job.svg";
import teamIcon from "../assets/team.svg";

const EmployeeItem = ({ emp }) => {
  return (
    <div className="card mb-3" key={emp.id}>
      <div className="card-body">
        <h6 className="card-title fw-600">{emp.name}</h6>
        <p className="d-flex align-items-center mb-2">
          <img
            className="img-fluid"
            alt="Designation"
            title="Designation"
            src={jobIcon}
          />
          <span className="ms-2">{emp.designation}</span>
        </p>
        <p className="d-flex align-items-center mb-0">
          <img className="img-fluid" alt="Team" title="Team" src={teamIcon} />
          <span className="ms-2">{emp.team}</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeItem;
