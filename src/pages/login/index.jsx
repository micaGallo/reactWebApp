
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import ErrorMessage from "../../components/ErrorMessage";
import { useAuthContext } from '../../contexts/AuthContext';
import "./index.scss";

const Login = () => {

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { dispatch, authState, currentUser } = useAuthContext();
  const navigate = useNavigate();

  // If the user logins successfully, redirect to home
  // If the user trying to enter to this page is authenticated, redirect to home
  useEffect(() => {
    const checkCurrentUser = () => {
      if (currentUser?.emailVerified || authState?.login?.success) {
        navigate('/');
      }
    };

    checkCurrentUser();
  }, [currentUser, authState]);

  // ------------------------------------------------------------------------

  // Check possible errors
  useEffect(() => {
    if (authState?.login?.error) {
      setError(authState?.login?.error);
    }
  }, [authState]);

  const onSubmit = (data) => {
    console.log("onSubmit", data);
    //setError('Error message');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '24px',
    color: '#526A7A',
    fontStyle: 'normal', 
  }

  return (
    <div className='loginContainer'>
      <Typography variant='h4' color='#29353D'>Navy SEAL Foundation</Typography>
      <div className='loginBowContainer'>
        <div className='loginHeader'>
          <Typography variant='h5' style={titleStyle}>Log in</Typography>
        </div>
        {error && ( 
          <ErrorMessage error={error}/>
        )}
        <div className='loginBody'>
          <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="email"
              variant="outlined"
              fullWidth
              label="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email format',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              style={{ marginBottom: '20px' }} 
            />

            <TextField
              id="password"
              variant="outlined"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
              {...register("password", { required: "Password link is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button className='loginSubmitButton' variant="contained" type="submit">Log in</Button>
          </form>
        </div> 
      </div>
    </div>
  );
};

export default Login;
