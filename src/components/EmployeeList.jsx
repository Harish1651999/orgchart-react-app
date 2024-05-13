import React, { useState } from "react";
import { useSelector } from "react-redux";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const emplist = useSelector((state) => state.employee.employeesList);

  // Extract unique team names
  const uniqueTeams = [...new Set(emplist.map((emp) => emp.team))];

  // Filter employees based on search term
  const filteredEmployees = emplist.filter(
    ({ name, designation, team }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function searchTermHandler(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function filterHandler(team) {
    setSearchTerm(team);
    if (team != "") {
      onFilterChange(team);
    } else {
      onFilterChange("All");
    }
  }

  return (
    <>
      <h5 className="fw-600 title-gray">Employee List</h5>
      <div className="row">
        <div className="col-xl-8 col-lg-8">
          <div className="emp-search-div position-relative mb-3">
            <input
              className="form-control bg-white ps-5"
              type="text"
              value={searchTerm}
              onChange={searchTermHandler}
              placeholder="Search..."
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
        </div>
        <div className="col-xl-4 col-lg-4">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle w-100"
              type="button"
              id="filterdropdownButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="filterdropdownButton"
            >
              <li>
                <a
                  className="dropdown-item"
                  href="javascript:void(0)"
                  onClick={() => filterHandler("")}
                >
                  All Teams
                </a>
              </li>
              {uniqueTeams.map((team, index) => (
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => filterHandler(team)}
                  >
                    {team}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-auto empListItemDiv">
        {searchTerm === ""
          ? emplist.map((emp) => <EmployeeItem key={emp.id} emp={emp} />)
          : filteredEmployees.map((emp) => (
              <EmployeeItem key={emp.id} emp={emp} />
            ))}
      </div>
    </>
  );
};

export default EmployeeList;
