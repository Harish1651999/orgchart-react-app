import { useEffect } from "react";
import "./App.css";
import { fetchData } from "./store/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import EmployeeList from "./components/EmployeeList";

function App() {
  const dispatch = useDispatch();
  const emp = useSelector((state) => state.employee.employeesList);

  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData thunk action
  }, []); // Call the effect only once when component mounts

  return (
    <div className="row">
      <div className="col-xl-4">
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;
