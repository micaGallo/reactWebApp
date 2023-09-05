import React, { useState} from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import dayjs from 'dayjs';
import { Grid, Box, Button } from '@mui/material';
import DataInputField from '../DataInputField';
import { DATA_INPUT_FIELD_TYPE } from '../../utils/constants'; 
import "./index.scss";

const UpdateEvent = ({event, setShow}) => {

  const form = useForm({
    defaultValues: {
      photo: event.photo,
      startDate: event.startDate,
      endDate: event.endDate,
      eventType: event.eventType,
      title: event.title,
      description: event.description,
      location: event.location,
      isRegistrable: event.isRegistrable,
      registrableLink: event.registrableLink,
      ageRestriction: event.ageRestriction,
    }
  });
  
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  
  var eventTypeOptions = [
    { id: 'camp', value: 'CAMP' },
    { id: 'community', value: 'COMMUNITY' },
    { id: 'fundraising', value: 'FUNDRAISING' },
    { id: 'anual', value: 'ANUAL' },
    { id: 'educational', value: 'EDUCATIONAL' }
  ];

  //TODO: the default value of setSelectedEventTypeOption should be just event.eventType
  const [selectedEventTypeOption, setSelectedEventTypeOption] = useState(eventTypeOptions.find(option => option.value === event.eventType).id);
  const [isRegistrable, setRegistrable] = useState(event.isRegistrable == "Yes");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState(event.description);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [showErrorStartDate, setShowErrorStartDate] = useState(false);
  const [showErrorEndDate, setShowErrorEndDate] = useState(false);


  const handleStartDateChange = (newValue) => {
    debugger;
    console.log(newValue)
    const formattedDate = newValue ? dayjs(newValue) : null;
    setSelectedStartDate(formattedDate);
    setShowErrorStartDate(!setSelectedStartDate);
  };

  const handleEndDateChange = (newValue) => {
    const formattedDate = newValue ? dayjs(newValue) : null;
    setSelectedEndDate(formattedDate);
    setShowErrorEndDate(!setSelectedEndDate);
  };

  const handleIsRegistrableChange = (event) => {
    setRegistrable(event.target.value === 'true');
    console.log("handleIsRegistrableChange", isRegistrable);
  };

  const handleEventTypeChange = (event) => {
    setSelectedEventTypeOption(event.target.value);
    console.log("handleEventTypeChange", selectedEventTypeOption);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("handleFileChange", selectedFile);
  };

  const handleDescriptionChange = (content) => {
    setDescription(content);
    console.log("handleDescriptionChange", description);
  };

  const onSubmit = (data) => {
    if(selectedStartDate && selectedEndDate){
      setShowErrorStartDate(false);
      setShowErrorEndDate(false);
      data.eventType = selectedEventTypeOption;
      data.photo = selectedFile;  
      data.startDate = selectedStartDate;  
      data.endDate = selectedEndDate;  
      data.isRegistrable = isRegistrable;
      data.description = description;
      console.log("onSubmit", data);
      setShow(false);
    }else {
      if(!selectedStartDate){
        setShowErrorStartDate(true);
      }
      if(!selectedEndDate){
        setShowErrorEndDate(true);
      }
    }    
  };

  return(
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header title="UPDATE EVENT" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
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
                label={"Age restriction"} 
                id={"ageRestriction"} 
                errorMessage={"Age restriction is required"} 
                errors={errors} 
                register={register}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.text} 
                label={"Location"} 
                id={"location"} 
                errorMessage={"Location is required"} 
                errors={errors} 
                register={register}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.dropdown} 
                label={"Type"} 
                id={"type"} 
                value={selectedEventTypeOption} 
                onChangeCallback={handleEventTypeChange} 
                dropdownOptions={eventTypeOptions}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.date} 
                label={"Start date"} 
                errorMessage={"Start date is required"} 
                value={selectedStartDate || dayjs(event.selectedStartDate)} 
                onChangeCallback={handleStartDateChange} 
                showErrorDate={showErrorStartDate}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.date} 
                label={"End date"} 
                errorMessage={"End date is required"} 
                value={selectedEndDate || dayjs(event.selectedEndDate)} 
                onChangeCallback={handleEndDateChange} 
                showErrorDate={showErrorEndDate}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.radio} 
                label={"Registrable"} 
                id={"isRegistrable"}
                value={isRegistrable.toString()} 
                onChangeCallback={handleIsRegistrableChange} 
              /> 
              {(isRegistrable == true) && (
                <DataInputField 
                  type={DATA_INPUT_FIELD_TYPE.text} 
                  label={"Registrable link"} 
                  id={"registrableLink"} 
                  errorMessage={"Registrable link is required"} 
                  errors={errors} 
                  register={register}
                /> 
              )}
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.picture} 
                label={"Photo"} 
                id={"photo"} 
                selectedFile={selectedFile} 
                onChangeCallback={handleFileChange} 
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.reactQuill} 
                label={"Description"} 
                value={description} 
                onChangeCallback={handleDescriptionChange} 
              /> 
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

export default UpdateEvent;
