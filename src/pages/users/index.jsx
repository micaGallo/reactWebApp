import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from "../../components/Header";
import "./index.scss";
import { headCells, userRows } from "../../helpers/user/datatablesource";
import SortTable from "../../components/SortTable"

const Users = () => {
  const handleAddUser = () => {
    console.log("handleAddUser");
  }

  const handleDelete = () => {
    console.log("handleDelete");
  };

  const handleBlock = () => {
    console.log("handleBlock");
  };

  const handlePasswordReset = () => {
    console.log("handlePasswordReset");
  };

  const handleEnableAdmin = (ids) => {
    console.log("handleEnableAdmin");
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
      <SortTable tableTitle={"User list"} menuItems={menuItems} headCells={headCells} rows={userRows} redirectTo={"/users/"}/>
    </Box>
  );
};

export default Users;
