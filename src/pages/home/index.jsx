import React from "react";
import Sidenav from "../../components/Sidenav";
import Table from "../../components/Table";
import Box from '@mui/material/Box';

const Home = () => {
  return(
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 style={{ marginTop: '50px' }}>Home</h1>
          <Table />
        </Box>
      </Box>
    </>
  );
};

export default Home;
