import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import Table from "../../components/Table";
import "./index.scss";
import { userColumns, userRows } from "../../datatablesource";

const Users = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="TEAM" subtitle="Managing the Team Members" />
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <Table data={data} columns={userColumns} actionColumn={actionColumn} />
    </Box>
  );
};

export default Users;
