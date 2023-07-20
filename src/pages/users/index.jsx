import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from "../../components/Header";
import Table from "../../components/Table";
import "./index.scss";
import { headCells, userRows } from "../../helpers/user/datatablesource";
import SortTable from "../../components/SortTable"

const Users = () => {
  const handleAddUser = () => {
    console.log("hola");
  }

  const handleDelete = () => {
    console.log("hola");
  };

  const handleBlock = () => {
    console.log("hola");
  };

  const handlePasswordReset = () => {
    console.log("hola");
  };

  const handleEnableAdmin = (ids) => {
    console.log("hola");
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
    {name: 'Block', action: handleBlock},
    {name: 'Password reset', action: handlePasswordReset},
    {name: 'Enable admin account', action: handleEnableAdmin},
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="TEAM" subtitle="Managing the Team Members" />
        <Button variant="outlined" onClick={handleAddUser}>Add User</Button>
      </div>
      <SortTable menuItems={menuItems} headCells={headCells} rows={userRows}/>
    </Box>
  );
};

export default Users;
