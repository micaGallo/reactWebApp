import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
            <Button variant="outlined" size="small" startIcon={<VisibilityIcon />} href={`/users/${params.row.id}`}>
              View
            </Button>
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
