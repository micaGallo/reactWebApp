import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import "./index.scss";
import UpdateUser from "../../components/updateUser";
import Menu from '../../components/Menu';

const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          user: {
            name: "John",
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

  //show update component
  const [show, setShow] = useState(false);

  const handleClick = () => {
		setShow(true);
    debugger;
    console.log(userData)
	};

  const handleDelete = () => {
    console.log("handleDelete");
    console.log('user id:', id);
    console.log('user data',userData);
  };

  const handleBlock = () => {
    console.log("handleBlock");
  };

  const handlePasswordReset = () => {
    console.log("handlePasswordReset");
  };

  const handleEnableAdmin = (ids) => {
    console.log("handleEnableAdmin");
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
    {name: 'Block', action: handleBlock},
    {name: 'Password reset', action: handlePasswordReset},
    {name: 'Enable admin account', action: handleEnableAdmin},
  ];

  return(
    <>
      { !show && !error && userData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="userTitleContainer">
            <Header title="User profile" />
            <div className="actionsContainer">
              <Menu menuItems={menuItems}></Menu>
              <Button variant="outlined" onClick={handleClick}>Edit User</Button>
            </div>
          </div>
          <div className="container">
            <Grid container>
              <Grid item xs={3}>Name</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.name}</Grid>
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
      { !show && error &&
        <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: 'center', fontSize: 'h6.fontSize'}}>
          <Typography style={{ color: '#bf0707' }} variant="body1"> 
            Upss, something wents wrong
          </Typography>
        </Box>
      }
      {
        show && <UpdateUser user={userData} setShow={setShow}/>
      }
    </>
  );
};

export default User;
