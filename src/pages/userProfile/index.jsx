import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import "./index.scss";

const UserProfile = () => {
  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="titleContainer">
        <Header title="User profile" />
        <Link to="/users/new" className="link">
          Edit user
        </Link>
      </div>
      <div className="container">
        <Grid container>
          <Grid item xs={3}>Full Name</Grid>
          <Grid item xs={9} sx={{ color: "#757575" }}>Johnatan Smith</Grid>
          <Box
            component="span"
            sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
          />
          <Grid item xs={3}>Email</Grid>
          <Grid item xs={9} sx={{ color: "#757575" }}>example@example.com</Grid>
          <Box
            component="span"
            sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
          />
          <Grid item xs={3}>Phone</Grid>
          <Grid item xs={9} sx={{ color: "#757575" }}>(097) 234-5678</Grid>
          <Box
            component="span"
            sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
          />
          <Grid item xs={3}>Mobile</Grid>
          <Grid item xs={9} sx={{ color: "#757575" }}>(098) 765-4321</Grid>
          <Box
            component="span"
            sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
          />
          <Grid item xs={3}>Address</Grid>
          <Grid item xs={9} sx={{ color: "#757575" }}>Bay Area, San Francisco, CA</Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default UserProfile;
