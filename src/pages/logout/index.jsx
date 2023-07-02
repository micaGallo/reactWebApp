import React from "react";
import Sidenav from "../../components/Sidenav";
import Box from '@mui/material/Box';

const Logout = () => {
  return(
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Logout</h1>
        </Box>
      </Box>
    </>
  );
};

export default Logout;
