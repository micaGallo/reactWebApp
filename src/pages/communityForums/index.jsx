import React from "react";
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import "./index.scss";
import { headCells, communityForumRows } from "../../helpers/communityForum/datatablesource";
import SortTable from "../../components/SortTable"

const CommunityForums = () => {
  const handleDelete = () => {
    console.log("handleDelete forms");
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="COMMUNITY FORUM" subtitle="To access more actions, please select one or more forums from the list"/>
      </div>
      <SortTable tableTitle={"Forum list"} menuItems={menuItems} headCells={headCells} rows={communityForumRows} redirectTo={"/communityForums/"}/>
    </Box>
  );

};

export default CommunityForums;
