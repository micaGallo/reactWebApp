import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import Table from "../../components/Table";
import "./index.scss";

const Users = () => {
  return(
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="datatableTitle">
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Link to="/users/new" className="link">
              Add New
            </Link>
          </div>
          <Table />
        </Box>
      </Box>
    </>
  );
};

export default Users;
