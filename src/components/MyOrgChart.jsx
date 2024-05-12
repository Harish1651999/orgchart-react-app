import React, { useEffect, useState } from "react";
import OrgChart from "@balkangraph/orgchart.js";
import { useDispatch, useSelector } from "react-redux";
import { updateManagerId } from "../store/employeeSlice";

const MyOrgChart = () => {
  const dispatch = useDispatch();
  const emplist = useSelector((state) => state.employee.employeesList);

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
      //   nodeMenu: {
      //     details: { text: "Details" },
      //     edit: { text: "Edit" },
      //     add: { text: "Add" },
      //     remove: { text: "Remove" },
      //   },
    });

    // chart.on("init", function (sender) {
    //   //   sender.editUI.show(1);
    // });

    // chart.on("click", function (sender, args) {
    //   sender.editUI.show(0);
    // });

    chart.on("drop", function (sender, draggedNodeId, droppedNodeId) {
      console.log({ sender, draggedNodeId, droppedNodeId });
      dispatch(updateManagerId(Number(draggedNodeId), Number(droppedNodeId)));
      //   if (draggedNodeId == 1) {
      //     return false;
      //   }

      //   if (droppedNodeId == 4) {
      //     return false;
      //   }
    });

    let empData = emplist.map((emp) => {
      return {
        id: emp.id,
        pid: emp.manager,
        "Employee Name": emp.name,
        Title: emp.designation,
        Photo: "https://cdn.balkan.app/shared/empty-img-none.svg",
      };
    });

    chart.load(empData);
  }, [emplist]);

  return <div id="tree" />;
};

export default MyOrgChart;
