import React from "react";
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import "./index.scss";
import { headCells, forumRows } from "../../helpers/forum/datatablesource";
import SortTable from "../../components/SortTable"

const Forums = () => {
  const handleDelete = () => {
    console.log("handleDelete forms");
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="FORUMS"/>
      </div>
      <SortTable
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
