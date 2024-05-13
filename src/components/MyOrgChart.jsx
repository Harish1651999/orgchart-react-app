import React, { useEffect, useState } from "react";
import OrgChart from "@balkangraph/orgchart.js";
import { useDispatch, useSelector } from "react-redux";
import { updateManagerId } from "../store/employeeSlice";

const MyOrgChart = ({ filteredTeam }) => {
  const dispatch = useDispatch();
  const emplist = useSelector((state) => state.employee.employeesList);

  // Filter employees based on the selected team
  const filteredEmployees =
    filteredTeam === "All"
      ? emplist
      : emplist.filter((emp) => emp.team === filteredTeam);

  useEffect(() => {
    const chart = new OrgChart(document.getElementById("tree"), {
      template: "ula",
      scaleInitial: OrgChart.match.boundary,
      mouseScrool: OrgChart.action.scroll,
      layout: OrgChart.mixed,
      enableSearch: false,
      enableDragDrop: true,
      collapse: {
        level: 2,
      },
      nodeBinding: {
        field_0: "Employee Name",
        field_1: "Title",
        img_0: "Photo",
      },
      nodeMouseClick: OrgChart.action.none, // prevent opening
      editForm: {
        photoBinding: "Photo",
      },
    });

    chart.on("drop", function (sender, draggedNodeId, droppedNodeId) {
      console.log({ sender, draggedNodeId, droppedNodeId });
      dispatch(updateManagerId(Number(draggedNodeId), Number(droppedNodeId)));
    });

    // Load filtered employees into the chart
    let empData = filteredEmployees.map((emp) => {
      return {
        id: emp.id,
        pid: emp.manager,
        "Employee Name": emp.name,
        Title: emp.designation,
        Photo: "https://cdn.balkan.app/shared/empty-img-none.svg",
      };
    });

    chart.load(empData);
  }, [filteredEmployees]); // Reload the chart when the filtered employees change

  return <div id="tree" className="vh-100" />;
};

export default MyOrgChart;
