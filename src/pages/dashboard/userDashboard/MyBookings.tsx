import React, { useMemo } from "react";
import { useTable, Column } from "react-table";
import { Eye, XCircle } from "lucide-react";

interface Booking {
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: string;
  isBooked: "Confirmed" | "Unconfirmed" | "Canceled";
}

const MyBookings: React.FC = () => {
  const data = useMemo<Booking[]>(
    () => [
      {
        date: "2024-09-15",
        startTime: "10:00 AM",
        endTime: "12:00 PM",
        user: "John Doe",
        facility: "Football Field",
        payableAmount: "$50",
        isBooked: "Confirmed",
      },
      {
        date: "2024-09-16",
        startTime: "01:00 PM",
        endTime: "03:00 PM",
        user: "Jane Smith",
        facility: "Tennis Court",
        payableAmount: "$30",
        isBooked: "Unconfirmed",
      },
      {
        date: "2024-09-17",
        startTime: "02:00 PM",
        endTime: "04:00 PM",
        user: "Alice Johnson",
        facility: "Basketball Court",
        payableAmount: "$40",
        isBooked: "Canceled",
      },
      {
        date: "2024-09-18",
        startTime: "11:00 AM",
        endTime: "01:00 PM",
        user: "Bob Lee",
        facility: "Swimming Pool",
        payableAmount: "$25",
        isBooked: "Confirmed",
      },
    ],
    []
  );

  const columns = useMemo<Column<Booking>[]>(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Start Time",
        accessor: "startTime",
      },
      {
        Header: "End Time",
        accessor: "endTime",
      },
      {
        Header: "User",
        accessor: "user",
      },
      {
        Header: "Facility",
        accessor: "facility",
      },
      {
        Header: "Payable Amount",
        accessor: "payableAmount",
      },
      {
        Header: "Status",
        accessor: "isBooked",
        Cell: ({ value }: { value: Booking["isBooked"] }) => (
          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              value === "Confirmed"
                ? "bg-green-600 text-white"
                : value === "Unconfirmed"
                ? "bg-yellow-500 text-black"
                : "bg-red-600 text-white"
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Actions",
        Cell: ({ row }: { row: any }) => (
          <div className="flex justify-center space-x-2">
            <button className="text-blue-400 hover:text-blue-600">
              <Eye size={20} />
            </button>
            <button className="text-red-400 hover:text-red-600">
              <XCircle size={20} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold text-gray-100">My Bookings</h2>
      <div className="overflow-x-auto">
        <div className="min-w-full rounded-lg bg-gray-800 p-4 shadow-lg">
          <table
            {...getTableProps()}
            className="min-w-full divide-y divide-gray-700 text-gray-100"
          >
            <thead className="bg-gray-700">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-4 py-2 text-left text-sm font-medium text-gray-100"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="hover:bg-gray-700">
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-2 text-sm text-gray-300"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
