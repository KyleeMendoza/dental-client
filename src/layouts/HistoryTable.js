import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function HistoryTable() {
  const data = [
    {
      id: 1,
      service: "Dental Checkup, Cleaning, X-ray",
      date: "2024-01-19",
      start: "09:00:00",
      end: "10:00:00",
      status: "completed",
    },
    {
      id: 2,
      service: "Orthodontic Consultation, Braces Adjustment",
      date: "2024-02-02",
      start: "14:30:00",
      end: "15:30:00",
      status: "pending",
    },
    {
      id: 3,
      service: "Teeth Whitening",
      date: "2024-02-15",
      start: "11:00:00",
      end: "12:00:00",
      status: "scheduled",
    },
    {
      id: 4,
      service: "Cavity Filling",
      date: "2024-03-05",
      start: "13:30:00",
      end: "14:30:00",
      status: "pending",
    },
    {
      id: 5,
      service: "Dental Emergency",
      date: "2024-04-10",
      start: "16:00:00",
      end: "17:00:00",
      status: "scheduled",
    },
    {
      id: 6,
      service: "Root Canal Treatment",
      date: "2024-04-25",
      start: "10:30:00",
      end: "11:30:00",
      status: "pending",
    },
  ];
  const columns = [
    { field: "id", headerName: "ID", width: 50 },

    {
      field: "service",
      headerName: "Service",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
    },
    {
      field: "start",
      headerName: "Start",
      width: 200,
    },
    {
      field: "end",
      headerName: "End",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
}
