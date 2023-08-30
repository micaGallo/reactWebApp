import React, { useState} from "react";
import { useForm } from "react-hook-form";
import { Grid, Button, Box } from "@mui/material";
import Header from "../Header";
import DataInputField from '../DataInputField';
import { DATA_INPUT_FIELD_TYPE } from '../../utils/constants'; 
import "./index.scss";

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

  var designationOptions = [
    { id: 'seal', value: 'SEAL' },
    { id: 'swcc', value: 'SWCC' },
    { id: 'sealSpouse', value: 'Seal Spouse' },
    { id: 'swccSpouse', value: 'SWCC Spouse' },
    { id: 'swccChild', value: 'SWCC Child' },
    { id: 'goldStarSpouse', value: 'Gold Star Spouse' },
    { id: 'goldStarSignificantOther', value: 'Gold Star Significant Other' },
    { id: 'goldStarChild', value: 'Gold Star Child' },
    { id: 'goldStarParent', value: 'Gold Star Parent' },
    { id: 'goldStarSibling', value: 'Gold Star Sibling' }
  ];

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const [selectedDesignationOption, setSelectedDesignationOption] = useState(designationOptions.find(option => option.value === user.designation).id);
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
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.text} 
                label={"Name"} 
                id={"name"} 
                errorMessage={"Name is required"} 
                errors={errors} 
                register={register}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.dropdown} 
                label={"Designation"} 
                id={"designation"} 
                value={selectedDesignationOption} 
                onChangeCallback={handleDesignationChange} 
                dropdownOptions={designationOptions}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.text} 
                label={"Preferred first name"} 
                id={"preferredFirstName"} 
                errorMessage={"Preferred first name is required"} 
                errors={errors} 
                register={register}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.email} 
                label={"Email"} 
                id={"email"} 
                errorMessage={"Email is required"} 
                errors={errors} 
                register={register}
              /> 
              <DataInputField 
                type={DATA_INPUT_FIELD_TYPE.picture} 
                label={"Picture"} 
                id={"picture"} 
                selectedFile={selectedFile} 
                onChangeCallback={handleFileChange} 
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

export default UpdateUser;
