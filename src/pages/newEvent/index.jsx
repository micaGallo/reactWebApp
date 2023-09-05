import React, { useState} from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from "../../components/Header";
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NativeSelect from '@mui/material/NativeSelect';
import "./index.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from 'dayjs';
import { FormControl, FormControlLabel, Radio, RadioGroup, Grid, Typography } from '@mui/material';
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css'

const NewEvent = () => {
  const form = useForm({
    defaultValues: {
      photo: '',
      startDate: '',
      endDate: '',
      eventType: '',
      title: '',
      description: '',
      location: '',
      isRegistrable: '',
      registrableLink:'',
      ageRestriction: '',
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

  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  const [selectedEventTypeOption, setSelectedEventTypeOption] = useState('camp');
  const [isRegistrable, setRegistrable] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [showErrorStartDate, setShowErrorStartDate] = useState(false);
  const [showErrorEndDate, setShowErrorEndDate] = useState(false);


  const handleStartDateChange = (newValue) => {
    const formattedDate = newValue ? dayjs(newValue).format('MM/DD/YYYY hh:mm a') : null;
    setSelectedStartDate(formattedDate);
    setShowErrorStartDate(!setSelectedStartDate);
  };

  const handleEndDateChange = (newValue) => {
    const formattedDate = newValue ? dayjs(newValue).format('MM/DD/YYYY hh:mm a') : null;
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
        <Header title="Create event" />
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
                <Grid item xs={3}>Age restriction</Grid>
                <TextField
                  id="ageRestriction"
                  variant="standard"
                  fullWidth
                  {...register("ageRestriction", { required: "Age restriction is required" })}
                  error={!!errors.ageRestriction}
                  helperText={errors.ageRestriction?.message}
                />
              </div>
              <div className="textFieldContainer">
                <Grid item xs={3}>Location</Grid>
                <TextField
                  id="location"
                  variant="standard"
                  fullWidth
                  {...register("location", { required: "Location is required" })}
                  error={!!errors.location}
                  helperText={errors.location?.message}
                />
              </div>
              <div className="textFieldContainer">
                <Grid item xs={3} id="dropdown-label">Type</Grid>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={"camp"}
                    onChange={handleEventTypeChange}
                    inputProps={{
                      name: 'type',
                      id: 'type',
                    }}
                  >
                    {eventTypeOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.value}</option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </div>
              <div className="textFieldContainer">
                <Grid item xs={2.4}>Start date</Grid>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker value={selectedStartDate} onChange={handleStartDateChange}/>
                  </LocalizationProvider>
                  {showErrorStartDate && (
                    <Typography style={{ color: '#d32f2f' }} variant="caption">
                      Start date is required
                    </Typography>
                  )}
                </div>
              </div>
              <div className="textFieldContainer">
                <Grid item xs={2.4}>End date</Grid>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker value={selectedEndDate} onChange={handleEndDateChange}/>
                  </LocalizationProvider>
                  {showErrorEndDate && (
                    <Typography style={{ color: '#d32f2f' }} variant="caption">
                      End date is required
                    </Typography>
                  )}
                </div>
              </div>
              <div className="textFieldContainer">
                <Grid item xs={2.4}>Registrable</Grid>
                <FormControl>
                  <RadioGroup
                    id="isRegistrable"
                    name="isRegistrable"
                    value={isRegistrable.toString()}
                    onChange={handleIsRegistrableChange}
                  >
                    <Box display="flex" flexDirection="row">
                      <FormControlLabel value="false" control={<Radio />} label="No" />
                      <FormControlLabel value="true" control={<Radio />} label="Yes" />
                    </Box>
                  </RadioGroup>
                </FormControl>
              </div>
              {(isRegistrable == true) && (
                <div className="textFieldContainer">
                  <Grid item xs={3}>Registrable link</Grid>
                  <TextField
                    id="registrableLink"
                    variant="standard"
                    fullWidth
                    {...register("registrableLink", { required: "Registrable link is required" })}
                    error={!!errors.registrableLink}
                    helperText={errors.registrableLink?.message}
                  />
               </div>
              )}

              <div className="textFieldContainer">
                <Grid item xs={2.4}>Photo</Grid>
                <input
                  type="file"
                  id="photo"
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <label htmlFor="photo">
                  <Button variant="outlined" size="small" startIcon={<AccountCircleIcon />}  component="span">
                    Upload Picture
                  </Button>
                </label>
                {selectedFile && <div className="pictureSelectedContainer">{selectedFile.name}</div>}
              </div>
              <div className="textFieldContainer">
                <Grid item xs={2.4}>Description</Grid>
                <Box component="main">
                  <div className="cmsGrid">
                    <ReactQuill
                      theme="snow"
                      modules={modules}
                      formats={formats}
                      placeholder="Write your content ...."
                      onChange={handleDescriptionChange}
                      style={{ height: "500px" }}
                    >
                    </ReactQuill>
                  </div>
                </Box>
                
              </div>

            </Grid>
          </div>
          <div className="buttonContainer">
            <Button variant="outlined" href={`/events`}>Cancel</Button>
            <Button variant="contained" type="submit">Save changes</Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default NewEvent;
