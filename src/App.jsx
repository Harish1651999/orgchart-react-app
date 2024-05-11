import { useEffect } from "react";
import "./App.css";
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
    <div className="row">
      <div className="col-xl-4">
        <div className="emplistDiv p-3">
          <EmployeeList />
        </div>
      </div>
      <div className="col-xl-8">
        <div className="">
          <MyOrgChart />
        </div>
      </div>
    </div>
  );
}

export default App;
