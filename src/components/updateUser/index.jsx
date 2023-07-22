import React from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import "./index.scss";

const UpdateUser = ({user, setShow}) => {
  const form = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      mobile: user.mobile,
      address: user.address 
    }
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    setShow(false);
  };

  return(
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header title="Update user"/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <Grid container>
              <div className="textFieldContainer">
                <Grid item xs={3}>Name</Grid>
                <TextField
                  id="name"
                  variant="standard"
                  fullWidth
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </div>
              <div className="textFieldContainer">
                <Grid item xs={3}>Email</Grid>
                <TextField
                  id="email"
                  variant="standard"
                  fullWidth
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email format',
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </div>
              <div className="textFieldContainer">
                <Grid item xs={3}>Phone</Grid>
                <TextField
                  id="phone"
                  variant="standard"
                  fullWidth
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: 'Invalid phone number format',
                    },
                  })}
                  error={!!errors.mobile}
                  helperText={errors.mobile?.message}
                />
              </div>
              <div className="textFieldContainer">
                <Grid item xs={3}>Mobile</Grid>
                <TextField
                  id="mobile"
                  variant="standard"
                  fullWidth
                  {...register('mobile', {
                    required: 'Mobile is required',
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: 'Invalid phone number format',
                    },
                  })}
                  error={!!errors.mobile}
                  helperText={errors.mobile?.message}
                />
              </div>
              <div className="textFieldContainer">
                <Grid item xs={3}>Address</Grid>
                <TextField
                  id="address"
                  variant="standard"
                  fullWidth
                  {...register("address", { required: "Address is required" })}
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              </div>
            </Grid>
          </div>
          <div className="buttonContainer">
            <Button variant="outlined" onClick={() => setShow(false)}>Cancel</Button>
            <Button variant="contained" type="submit">Save changes</Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default UpdateUser;
