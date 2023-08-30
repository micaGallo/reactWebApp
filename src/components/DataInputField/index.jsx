import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DATA_INPUT_FIELD_TYPE } from '../../utils/constants'; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { FormControl, FormControlLabel, Radio, RadioGroup, Grid, Typography, Button } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css'
import "./index.scss";

const DataInputField = ({ type, label, value, id, errorMessage, errors, register, onChangeCallback, dropdownOptions, showErrorDate, selectedFile}) => {
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

  return (
    <>
      {(() => {
        switch (type) {
          case DATA_INPUT_FIELD_TYPE.text:
            return (
              <div className="textFieldContainer">
                <Grid item xs={3}>{label}</Grid>
                <TextField
                  id={id}
                  variant="standard"
                  fullWidth
                  {...register(id, { required: errorMessage })}
                  error={!!errors[id]}
                  helperText={errors[id]?.message}
                />
              </div>
            );

          case DATA_INPUT_FIELD_TYPE.email:
            return (
              <div className="textFieldContainer">
                <Grid item xs={3}>{label}</Grid>
                <TextField
                  id={id}
                  variant="standard"
                  fullWidth
                  {...register(id, {
                    required: errorMessage,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email format',
                    },
                  })}
                  error={!!errors[id]}
                  helperText={errors[id]?.message}
                />
              </div>
            );

          case DATA_INPUT_FIELD_TYPE.dropdown:
            return (
              <div className="textFieldContainer">
                <Grid item xs={3} id="dropdown-label">{label}</Grid>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={value}
                    onChange={onChangeCallback}
                    inputProps={{ name: id,  id: id,}}
                  >
                    {dropdownOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.value}</option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </div>
            );

          case DATA_INPUT_FIELD_TYPE.radio:
            return (
              <div className="textFieldContainer">
                <Grid item xs={2.4}>{label}</Grid>
                <FormControl>
                  <RadioGroup
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChangeCallback}
                  >
                    <Box display="flex" flexDirection="row">
                      <FormControlLabel value="false" control={<Radio />} label="No" />
                      <FormControlLabel value="true" control={<Radio />} label="Yes" />
                    </Box>
                  </RadioGroup>
                </FormControl>
              </div>
            );

          case DATA_INPUT_FIELD_TYPE.date:
            return (
              <div className="textFieldContainer">
                <Grid item xs={2.4}>{label}</Grid>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker value={value} onChange={onChangeCallback}/>
                  </LocalizationProvider>
                  {showErrorDate && (
                    <Typography style={{ color: '#d32f2f' }} variant="caption">
                      {errorMessage}
                    </Typography>
                  )}
                </div>
              </div>
            );

          case DATA_INPUT_FIELD_TYPE.picture:
            return (
              <div className="textFieldContainer">
                <Grid item xs={2.4}>{label}</Grid>
                <input
                  type="file"
                  id={id}
                  onChange={onChangeCallback}
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
            );

          case DATA_INPUT_FIELD_TYPE.reactQuill:
            return (
              <div className="textFieldContainer">
                <Grid item xs={2.4}>{label}</Grid>
                <Box component="main">
                  <div className="cmsGrid">
                    <ReactQuill
                      theme="snow"
                      modules={modules}
                      formats={formats}
                      value={value}
                      onChange={onChangeCallback}
                      style={{ height: "500px" }}
                    >
                    </ReactQuill>
                  </div>
                </Box>
              </div>
            );
          
          default:
            return <></>;  
        }
      })()}
    </>
  );
};

export default DataInputField;
