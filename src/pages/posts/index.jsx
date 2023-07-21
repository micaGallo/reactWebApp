import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from "../../components/Header";
import "./index.scss";
import { headCells, postRows } from "../../helpers/post/datatablesource";
import SortTable from "../../components/SortTable"

const Posts = () => {
  const handleAddPost = () => {
    console.log("handleAddPost");
  }

  const handleDelete = () => {
    console.log("handleDelete");
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="datatableTitle">
        <Header title="COMUNITY FORUM" />
        <Button variant="outlined" onClick={handleAddPost}>Add Post</Button>
      </div>
      <SortTable tableTitle={"Post list"} menuItems={menuItems} headCells={headCells} rows={postRows} redirectTo={"/posts/"}/>
    </Box>
  );

};

export default Posts;
