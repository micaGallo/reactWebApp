import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Box, Button} from "@mui/material";
import Header from "../../components/Header";
import UpdateUser from "../../components/UpdateUser";
import Menu from '../../components/Menu';
import ErrorMessage from '../../components/ErrorMessage';
import DataDetailsItem from '../../components/DataDetailsItem';
import DataDetailsPicture from '../../components/DataDetailsPicture';
import "./index.scss";

const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          user: {
            name: "John Lenon",
            designation: "SWCC Spouse",
            preferredFirstName: "John",
            email: "johnsmithe@example.com",
            picture: "https://cdn.eldestapeweb.com/eldestape/072023/1689894696213/mirtha-legrand---perder-frase-jpeg..webp?cw=770&ch=440&extw=jpeg",
          }
        }
        return data;
      }).then((data) => {
        setUserData(data.user);
      }).catch(error => {
        setError(error);
      });
  }, [])

  const handleEdit = () => {
		setShowEditModal(true);
    debugger;
    console.log(userData)
	};

  const handleDelete = () => {
    console.log("handleDelete");
    console.log('user id:', id);
    console.log('user data',userData);
  };

  const handleBlock = () => {
    console.log("handleBlock");
  };

  const handlePasswordReset = () => {
    console.log("handlePasswordReset");
  };

  const handleEnableAdmin = (ids) => {
    console.log("handleEnableAdmin");
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
    {name: 'Block', action: handleBlock},
    {name: 'Password reset', action: handlePasswordReset},
    {name: 'Enable admin account', action: handleEnableAdmin},
  ];

  return(
    <>
      { !showEditModal && !error && userData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="userTitleContainer">
            <Header title="USER PROFILE" />
            <div className="actionsContainer">
              <Menu menuItems={menuItems}></Menu>
              <Button variant="outlined" onClick={handleEdit}>Edit User</Button>
            </div>
          </div>
          <div className="container">
            <div className="userPictureContainer">
              <DataDetailsPicture pictureUrl={userData.picture} defaultPictureUrl={'https://www.asofiduciarias.org.co/wp-content/uploads/2018/06/sin-foto.png'}/>
            </div>
            <Grid container>
              <DataDetailsItem title={"Name"} value={userData.name}/>
              <DataDetailsItem title={"Designation"} value={userData.designation}/>
              <DataDetailsItem title={"Preferred first name"} value={userData.preferredFirstName}/>
              <DataDetailsItem title={"Email"} value={userData.email} showSeparator={false}/>
            </Grid>
          </div>
        </Box>
      }
      { 
        !showEditModal && error && <ErrorMessage/>
      }
      {
        showEditModal && <UpdateUser user={userData} setShow={setShowEditModal}/>
      }
    </>
  );
};

export default User;
