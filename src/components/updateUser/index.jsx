import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import "./index.scss";

const UpdateUser = ({user}) => {
  const [updatedAttr, setUpdatedAttr] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    mobile: user.mobile,
    address: user.address
  });

  const handleSave = () => {
		//llamar be
    console.log(updatedAttr)
	};

  const handleCancel = () => {
		//HOLA
	};

  const handleNameChange = (event) => {
    setUpdatedAttr({ ...updatedAttr, name: event.target.value });
  };

  return(
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="titleContainer">
          <Header title="Update user" />
          <Button variant="outlined" onClick={handleSave}>Save</Button>
          <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
        </div>
        <div className="container">
          <Grid container>
            <div className="textFieldContainer">
              <Grid item xs={3}>Name</Grid>
              <TextField
                id="name"
                defaultValue={user.name}
                onChange={(event) => setUpdatedAttr({ ...updatedAttr, name: event.target.value })}
                variant="standard"
                fullWidth
              />
            </div>
            <div className="textFieldContainer">
              <Grid item xs={3}>Email</Grid>
              <TextField
                id="email"
                defaultValue={user.email}
                onChange={(event) => setUpdatedAttr({ ...updatedAttr, email: event.target.value })}
                variant="standard"
                fullWidth
              />
            </div>
            <div className="textFieldContainer">
              <Grid item xs={3}>Phone</Grid>
              <TextField
                id="phone"
                defaultValue={user.phone}
                onChange={(event) => setUpdatedAttr({ ...updatedAttr, phone: event.target.value })}
                variant="standard"
                fullWidth
              />
            </div>
            <div className="textFieldContainer">
              <Grid item xs={3}>Mobile</Grid>
              <TextField
                id="mobile"
                defaultValue={user.mobile}
                onChange={(event) => setUpdatedAttr({ ...updatedAttr, mobile: event.target.value })}
                variant="standard"
                fullWidth
              />
            </div>
            <div className="textFieldContainer">
              <Grid item xs={3}>Address</Grid>
              <TextField
                id="address"
                defaultValue={user.address}
                onChange={(event) => setUpdatedAttr({ ...updatedAttr, address: event.target.value })}
                variant="standard"
                fullWidth
              />
            </div>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default UpdateUser;
