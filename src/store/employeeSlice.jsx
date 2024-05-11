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
  },
});

export const { updateEmployeeList } = employeeSlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8000/data");
    dispatch(updateEmployeeList(response.data));
    return "Fetching Successful";
  } catch (error) {
    console.log(error);
  }
};

export default employeeSlice.reducer;
