import React from "react";
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import "./index.scss";
import { headCells, forumRows } from "../../helpers/forum/datatablesource";
import Table from "../../components/Table"

const Forums = () => {
  const handleDelete = (ids) => {
    console.log("handleDelete forms", ids);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="FORUMS"/>
      </div>
      <Table
        tableTitle={"To access more actions, please select one or more forums"}
        menuItems={menuItems}
        headCells={headCells}
        rows={forumRows}
        redirectTo={"/forums/"}
      />
    </Box>
  );

};

export default Forums;
