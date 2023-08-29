import React, { useState} from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./index.scss";
import { Grid, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  zindex: 1000000000,
};

const CreateEventReminderModal = ({openModal, setOpenModal, onSaveChangesCallback}) => {
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
    const formattedDate = newValue ? dayjs(newValue).format('MM/DD/YYYY hh:mm a') : null;
    setSelectedDate(formattedDate);
    setShowErrorDate(!selectedDate);
  };

  const onSubmit = (data) => {
    if(selectedDate){
      setShowErrorDate(false);
      data.date = selectedDate;  
      onSaveChangesCallback(data);
      console.log("onSubmit", data);
    }else{
      setShowErrorDate(true);
    }
  };

  return (
    <React.Fragment>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 id="parent-modal-title">Create event reminder</h2>
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
                  {...register("message", { required: "Message is required" })}
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
            <div className="postButtonContainer">
              <Button variant="outlined" onClick={() => setOpenModal(false)}>Cancel</Button>
              <Button variant="contained" type="submit">Save changes</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default CreateEventReminderModal;
