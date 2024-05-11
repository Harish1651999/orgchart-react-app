import React from "react";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const emplist = useSelector((state) => state.employee.employeesList);

  return (
    <>
      <h5 className="fw-600 title-gray">Employee List</h5>
      <div className="emp-search-div position-relative mb-3">
        <input
          className="form-control bg-white ps-5"
          type="text"
          id=""
          placeholder="Search by employee id"
        />
        <svg
          className="position-absolute top-50 translate-middle"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icons">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.13043 3.17432C5.76869 3.17432 3.04347 5.89954 3.04347 9.26127C3.04347 12.623 5.76869 15.3482 9.13043 15.3482C10.4977 15.3482 11.7596 14.8974 12.7758 14.1364L16.3417 17.7023C16.6813 18.0419 17.2319 18.0419 17.5715 17.7023C17.911 17.3627 17.911 16.8121 17.5715 16.4725L14.0055 12.9066C14.7666 11.8905 15.2174 10.6285 15.2174 9.26127C15.2174 5.89954 12.4922 3.17432 9.13043 3.17432ZM4.7826 9.26127C4.7826 6.86003 6.72919 4.91345 9.13043 4.91345C11.5317 4.91345 13.4783 6.86003 13.4783 9.26127C13.4783 11.6625 11.5317 13.6091 9.13043 13.6091C6.72919 13.6091 4.7826 11.6625 4.7826 9.26127Z"
              fill="#64748B"
            ></path>
          </g>
        </svg>
      </div>
      {emplist.map((emp) => (
        <div className="card mb-3" key={emp.id}>
          <div className="card-body">
            <h6 className="card-title fw-600">{emp.name}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {emp.name}
            </h6>
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
      ))}
    </>
  );
};

export default EmployeeList;
