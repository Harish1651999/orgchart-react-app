import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  employeesList: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    updateEmployeeList(state, action) {
      state.employeesList = action.payload;
    },
    updateManagerIdinList(state, action) {
      state.employeesList = state.employeesList.map((emp) =>
        emp.id === action.payload.id ? action.payload : emp
      );
    },
  },
});

export const { updateEmployeeList, updateManagerIdinList } =
  employeeSlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      // "http://localhost:8000/data"
      "https://org-chart-2aa4.onrender.com/data"
    );
    dispatch(updateEmployeeList(response.data));
    return "Fetching Successful";
  } catch (error) {
    console.log(error);
  }
};

export const updateManagerId = (id, mid) => async (dispatch) => {
  try {
    const response = await axios.patch(
      // `http://localhost:8000/data/${id}`,
      `https://org-chart-2aa4.onrender.com/data/${id}`,
      {
        manager: mid,
      }
    );
    dispatch(updateManagerIdinList(response.data));
    console.log(response.data);
    return "Fetching Successful";
  } catch (error) {
    console.log(error);
  }
};

export default employeeSlice.reducer;
