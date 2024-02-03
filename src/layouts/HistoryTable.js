import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import TeethModal from "../components/TeethModal";

export default function HistoryTable({ appointmentData }) {
  const [appointment, setAppointment] = React.useState([]);

  //Shaping the fetched data according to the expected data layout.
  React.useEffect(() => {
    const refactoredAppointments = appointmentData.map((item, index) => ({
      id: index + 1,
      date: item.appointment_start.split(" ")[0],
      time: item.appointment_start.split(" ")[1],
      // end: item.appointment_end.split(" ")[1],
      service: [
        { name: item.service, price: item.service_cost },
        ...item.additional_services.map((additionalServiceItem) => ({
          name: additionalServiceItem.service_description,
          price: additionalServiceItem.service_cost,
        })),
      ],
      status: item.approval,
      procedure: <TeethModal />,
    }));
    setAppointment(refactoredAppointments);
  }, [appointmentData]);

  //This is the expected data layout.
  // const data = [
  //   {
  //     id: 1,
  //     date: "2024-01-19",
  //     start: "09:00:00",
  //     end: "10:00:00",
  //     service: [
  //       { name: "Dental Checkup", price: 2500 },
  //       { name: "Cleaning", price: 500 },
  //       { name: "X-ray", price: 200 },
  //     ],
  //     status: "completed",
  //     procedure: <TeethModal />,
  //   },
  // ];

  const columns = [
    { field: "id", headerName: "ID", width: 50 },

    {
      field: "date",
      headerName: "Date",
      width: 200,
    },
    {
      field: "time",
      headerName: "Time",
      width: 200,
    },
    // {
    //   field: "end",
    //   headerName: "End",
    //   width: 200,
    // },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "service",
      headerName: "Service",
      width: 200,
      renderCell: (params) => (
        <div className="flex flex-col my-2">
          {params.row.service.map((item) => (
            <p key={item.name} className="text-xs font-semibold">
              {item.name}: <span className="font-normal">{item.price},</span>
            </p>
          ))}
        </div>
      ),
    },
    {
      field: "procedure",
      headerName: "Procedure",
      width: 200,
      renderCell: (params) => <div>{params.row.procedure}</div>,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={appointment}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        getRowHeight={() => "auto"}
      />
    </div>
  );
}
