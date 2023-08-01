import React, { useState} from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography } from "@mui/material";
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from 'dayjs';

const NewPushNotification = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showErrorDate, setShowErrorDate] = useState(false);

  const form = useForm({
    defaultValues: {
      title: '',
      message: '',
      date: ''
    }
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleDateChange = (newValue) => {
    const formattedDate = newValue ? dayjs(newValue).format('MM/DD/YYYY hh:mm aa') : null;
    setSelectedDate(formattedDate);
    setShowErrorDate(!selectedDate);
  };

  const onSubmit = (data) => {
    if(selectedDate){
      setShowErrorDate(false);
      data.date = selectedDate;  
      console.log("onSubmit", data);
    }else{
      setShowErrorDate(true);
    }
  };

  return(
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header title="Create push notification" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <Grid container>
              <div className="textFieldContainer">
                <Grid item xs={3}>Title</Grid>
                <TextField
                  id="title"
                  variant="standard"
                  fullWidth
                  {...register("title", { required: "Title is required" })}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              </div>
              <div className="textFieldContainer">
                <Grid item xs={3}>Message</Grid>
                <TextField
                  id="message"
                  variant="standard"
                  fullWidth
                  {...register("message", { required: "Message first name is required" })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              </div>
              <div className="textFieldContainer">
                <Grid item xs={2.4}>Date</Grid>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker value={selectedDate} onChange={handleDateChange}/>
                  </LocalizationProvider>
                  {showErrorDate && (
                    <Typography style={{ color: '#d32f2f' }} variant="caption">
                      Date is required
                    </Typography>
                  )}
                </div>
              </div>
            </Grid>
          </div>
          <div className="buttonContainer">
            <Button variant="outlined" href={`/notifications`}>Cancel</Button>
            <Button variant="contained" type="submit">Save changes</Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default NewPushNotification;
