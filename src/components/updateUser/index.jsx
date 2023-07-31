import React, { useState} from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import Header from "../Header";
import TextField from '@mui/material/TextField';
import "./index.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const UpdateUser = ({user, setShow}) => {
  const form = useForm({
    defaultValues: {
      name: user.name,
      designation: user.designation,
      preferredFirstName: user.preferredFirstName,
      email: user.email,
      picture: user.picture 
    }
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const [selectedDesignationOption, setSelectedDesignationOption] = useState('seal');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDesignationChange = (event) => {
    setSelectedDesignationOption(event.target.value);
    console.log("handleDesignationChange", selectedDesignationOption);
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("handleFileChange", selectedFile);
  };

  const handleImageError = (event) => {
    event.target.src = '/ruta-a-la-imagen-por-defecto.jpg'; // Cambia la ruta según tus necesidades.
  };

  const onSubmit = (data) => {
    data.designation = selectedDesignationOption;
    data.picture = selectedFile;  
    console.log(data);
    setShow(false);
  };

  return(
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header title="UPDATE USER"/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <Grid container>
              {/* <div className="userPictureContainer">
                <Box display="block" justifyContent="center" alignItems="center">
                  <img
                    id="picture"
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={picture} 
                    onError={handleImageError} // Se ejecuta si la imagen actual falla al cargar.
                    style={{ cursor: "pointer",  borderRadius: "50%", objectFit: "cover"}}
                  />
                </Box>
              </div> */}
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
                <Grid item xs={3} id="dropdown-label">Designation</Grid>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={"seal"}
                    onChange={handleDesignationChange}
                    inputProps={{
                      name: 'designation',
                      id: 'designation',
                    }}
                  >
                    <option value="seal">SEAL</option>
                    <option value="swcc">SWCC</option>
                    <option value="sealSpouse">Seal Spouse</option>
                    <option value="swccSpouse">SWCC Spouse</option>
                    <option value="swccChild">SWCC Child</option>
                    <option value="goldStarSpouse">Gold Star Spouse</option>
                    <option value="goldStarSignificantOther">Gold Star Significant Other</option>
                    <option value="goldStarChild">Gold Star Child</option>
                    <option value="goldStarParent">Gold Star Parent</option>
                    <option value="goldStarSibling">Gold Star Sibling</option>
                  </NativeSelect>
                </FormControl>
              </div>
              <div className="textFieldContainer">
                <Grid item xs={3}>Preferred first name</Grid>
                <TextField
                  id="preferredFirstName"
                  variant="standard"
                  fullWidth
                  {...register("preferredFirstName", { required: "Preferred first name is required" })}
                  error={!!errors.preferredFirstName}
                  helperText={errors.preferredFirstName?.message}
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
                <Grid item xs={2.4}>Picture</Grid>
                <input
                  type="file"
                  id="picture"
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <label htmlFor="picture">
                  <Button variant="outlined" size="small" startIcon={<AccountCircleIcon />}  component="span">
                    Upload Picture
                  </Button>
                </label>
                {selectedFile && <div className="pictureSelectedContainer">{selectedFile.name}</div>}
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
