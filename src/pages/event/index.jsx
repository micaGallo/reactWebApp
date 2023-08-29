import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import Menu from '../../components/Menu';
import "./index.scss";
import CreateEventReminderModal from "../../components/CreateEventReminderModal";
import UpdateEvent from "../../components/UpdateEvent";

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
            startDate: "SUN. APR 23",
            endDate: "SUN. APR 23",
            eventType: "COMMUNITY",
            title: "NSF SPRING FLING AT THE ZOO",
            description: "<p><span class='ql-size-huge'>Titulo</span></p><p><br></p><p><span style='color: rgb(230, 0, 0);'>red body</span></p><p><br></p><ul><li>pointer</li></ul><p><br></p><p><u>underline text</u></p><p><br></p><p>bold text</p>",
            location: "Norfolk, VA",
            isRegistrable: "Yes",
            registrableLink: "https://i.guim.co.uk/img/media/b60a4e5fed7d577aaaae08c2f194ad432732b073/0_0_5333_3200/master/5333.jpg?width=620&dpr=2&s=none",
            ageRestriction: "N/A",
          }
        }
        return data;
      }).then((data) => {
        setEventData(data.event);
      }).catch(error => {
        setError(error);
      });
  }, [])

   //show update component
   const [showEditEvent, setShowEditEvent] = useState(false);

  const [openCreateReminderModal, setOpenCreateReminderModal] = useState(false);

  const handleEdit= () => {
    setShowEditEvent(true);
    debugger;
    console.log(eventData)
  };

  const handleDelete = () => {
    console.log("handleDelete");
    console.log('event id:', id);
    console.log('event data', eventData);
  };

  const handleCreateEventReminder = () => {
    console.log("handleSetReminder");
    setOpenCreateReminderModal(true)
  };

  const handleSaveEventReminderCallback = (data) => {
    console.log("handleSaveEventReminderCallback", data);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
    {name: 'Create event reminder', action: handleCreateEventReminder},
  ];

  return(
    <>
      { !showEditEvent && !error && eventData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="userTitleContainer">
            <Header title="EVENT DETAILS" />
            <div className="actionsContainer">
              <Menu menuItems={menuItems}></Menu>
              <Button variant="outlined" onClick={handleEdit}>Edit event</Button>
            </div>
          </div>
          <div className="container">
            <div className="userPictureContainer">
              <Box display="block" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="120px"
                  height="120px"
                  src={eventData.photo ||'https://www.asofiduciarias.org.co/wp-content/uploads/2018/06/sin-foto.png'}
                  style={{ borderRadius: "10%", objectFit: "cover"}}
                />
              </Box>
            </div>
            <Grid container>
              <Grid item xs={3}>Title</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{eventData.title}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Age restriction</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{eventData.ageRestriction}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Location</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{eventData.location}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Event type</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{eventData.eventType}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Date</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{eventData.startDate} - {eventData.endDate}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              <Grid item xs={3}>Registrable</Grid>
              <Grid item xs={9} sx={{ color: "#757575" }}>{eventData.isRegistrable}</Grid>
              <Box
                component="span"
                sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
              />
              {(eventData.isRegistrable == "Yes") && 
                <>
                <Grid item xs={3}>Registrable link</Grid>
                <Grid item xs={9} sx={{ color: "#757575" }}>{eventData.registrableLink}</Grid>
                <Box
                  component="span"
                  sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
                />
               </>
              }
              <Grid item xs={3}>Description</Grid>
              <Grid item xs={9}>
                <div
                  dangerouslySetInnerHTML={{ __html: eventData.description }}
                  style={{ color: "#757575" }}
                />
              </Grid>
            </Grid>
          </div>
        </Box>
      }
      { !showEditEvent && error &&
        <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: 'center', fontSize: 'h6.fontSize'}}>
          <Typography style={{ color: '#bf0707' }} variant="body1"> 
            Upss, something wents wrong
          </Typography>
        </Box>
      }
      {
        showEditEvent && <UpdateEvent event={eventData} setShow={setShowEditEvent}/>
      }
      { openCreateReminderModal && <CreateEventReminderModal openModal={openCreateReminderModal} setOpenModal={setOpenCreateReminderModal} onSaveChangesCallback={handleSaveEventReminderCallback}/> }
    </>
  );
};

export default Event;
