import React from "react";
import Sidenav from "../../components/Sidenav";
import Box from '@mui/material/Box';

const Contact = () => {
  return(
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 style={{ marginTop: '50px' }}>Contact</h1>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
