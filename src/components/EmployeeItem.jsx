import React from "react";

const EmployeeItem = ({ emp }) => {
  return (
    <div className="card mb-3" key={emp.id}>
      <div className="card-body">
        <h6 className="card-title fw-600">{emp.name}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">{emp.name}</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="d-flex align-items-center">
          <span>{emp.designation}</span>
        </p>
        <p className="d-flex align-items-center">
          <span>{emp.team}</span>
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default EmployeeItem;
