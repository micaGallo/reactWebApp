import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import "./index.scss";

const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(id);
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          user: {
            name: "John",
            lastname: "Smith",
            email: "johnsmithe@example.com",
            phone: "123-456-7890",
            mobile: "987-654-3210",
            address: "123 Main Street, City, Country"
          }
        }
        return data;
      }).then((data) => {
        setUserData(data.user);
      }).catch(error => {
        setError(error);
      });
  }, [])

  return(
    <>
      { !error && userData && 
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
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.name} {userData.lastname}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Email</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.email}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Phone</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.phone}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Mobile</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.mobile}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Address</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.address}</Grid>
            </Grid>
          </div>
        </Box>
      }
      { error &&
        <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: 'center', fontSize: 'h6.fontSize'}}>
          <Typography style={{ color: '#bf0707' }} variant="body1"> 
            Upss, something wents wrong
          </Typography>
        </Box>
      }
    </>
  );
};

export default User;
