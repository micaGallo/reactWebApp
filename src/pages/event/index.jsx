import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import "./index.scss";
import Menu from '../../components/Menu';

const Event = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          event: {
            id: 1,
            photo: "https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/2023/organizer/a_organizer_event--creator-eventbrite-.jpeg",
            date: "SUN. APR 23",
            eventType: "COMMUNITY EVENT",
            title: "NSF SPRING FLING AT THE ZOO",
            description: "Lorem ipsum dolor sit amet consectetur. Tincidunt morbi pellentesque eget diam...",
            location: "Norfolk, VA",
            ageRange: "N/A",
          }
        }
        return data;
      }).then((data) => {
        setEventData(data.event);
      }).catch(error => {
        setError(error);
      });
  }, [])

  const handleDelete = () => {
    console.log("handleDelete");
    console.log('event id:', id);
    console.log('event data', eventData);
  };

  const handleImageError = (event) => {
    event.target.src = '/ruta-a-la-imagen-por-defecto.jpg'; // Cambia la ruta según tus necesidades.
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <>
      { !error && eventData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="eventTitleContainer">
            <Header title="EVENT DETAILS" />
            <Menu menuItems={menuItems}></Menu>
          </div>
          <div className="container">
            <div className="userPictureContainer">
              <Box display="block" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="300px"
                  height="300px"
                  src={eventData.photo || '/ruta-a-la-imagen-por-defecto.jpg'} // Establece la imagen por defecto directamente en la etiqueta img.
                  onError={handleImageError} // Se ejecuta si la imagen actual falla al cargar.
                  style={{ objectFit: "cover"}}
                />
              </Box>
            </div>
            <Grid container>
              <Grid item xs={3}>Title</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{eventData.title}</Grid>
         
              {/* <Grid item xs={3}>Designation</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.designation}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Preferred first name</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.preferredFirstName}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Email</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{userData.email}</Grid> */}
            </Grid>
          </div>
        </Box>
      }
      { error &&
        <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: 'center', fontSize: 'h6.fontSize'}}>
          <Typography style={{ color: '#bf0707' }} variant="body1"> 
            Upss, something wents wrong
          </Typography>
        </Box>
      }
    </>
  );
};

export default Event;
