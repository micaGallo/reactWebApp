import React, { useState} from "react";
import { useForm } from "react-hook-form";
import { Grid, Box, Modal, Button } from "@mui/material";
import dayjs from 'dayjs';
import DataInputField from '../../components/DataInputField';
import { DATA_INPUT_FIELD_TYPE } from '../../utils/constants'; 
import "./index.scss";

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
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.text} 
                label={"Title"} 
                id={"title"} 
                errorMessage={"Title is required"} 
                errors={errors} 
                register={register}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.text} 
                label={"Message"} id={"message"} 
                errorMessage={"Message is required"} 
                errors={errors} 
                register={register}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.date} 
                label={"Date"} 
                errorMessage={"Date is required"} 
                value={selectedDate} 
                handleDateChange={handleDateChange} 
                showErrorDate={showErrorDate}
              /> 
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
