import { useEffect } from "react";
import "./App.css";
import "./orgChart.css";
import { fetchData } from "./store/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import EmployeeList from "./components/EmployeeList";
import MyOrgChart from "./components/MyOrgChart";

function App() {
  const dispatch = useDispatch();
  const emp = useSelector((state) => state.employee.employeesList);

  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData thunk action
  }, []); // Call the effect only once when component mounts

  return (
    <div className="orgChart-page pt-3 overflow-hidden">
      <div className="row m-0">
        <div className="col-xl-4 col-lg-4">
          <div className="emplistDiv h-100 p-3">
            <EmployeeList />
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="">
            <MyOrgChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
