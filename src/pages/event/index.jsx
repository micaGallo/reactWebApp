import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Box, Button} from "@mui/material";
import Header from "../../components/Header";
import Menu from '../../components/Menu';
import CreateNotificationModal from "../../components/CreateNotificationModal";
import UpdateEvent from "../../components/UpdateEvent";
import ErrorMessage from "../../components/ErrorMessage";
import DataDetailsItem from '../../components/DataDetailsItem';
import DataDetailsPicture from '../../components/DataDetailsPicture';
import { DATA_DETAILS_ITEM_TYPE } from "../../utils/constants";
import "./index.scss";

const Event = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [openCreateNotificationModal, setOpenCreateNotificationModal] = useState(false);

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

  const handleEdit= () => {
    setShowEditModal(true);
    console.log(eventData)
  };

  const handleDelete = () => {
    console.log("handleDelete");
    console.log('event id:', id);
    console.log('event data', eventData);
  };

  const handleCreateNotification = () => {
    console.log("handleSetReminder");
    setOpenCreateNotificationModal(true)
  };

  const handleSaveEventReminderCallback = (data) => {
    console.log("handleSaveEventReminderCallback", data);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
    {name: 'Create notification', action: handleCreateNotification},
  ];

  return(
    <>
      { !showEditModal && !error && eventData && 
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
              <DataDetailsPicture 
                pictureUrl={eventData.photo} 
                defaultPictureUrl={'https://www.asofiduciarias.org.co/wp-content/uploads/2018/06/sin-foto.png'}
              />
            </div>
            <Grid container>
              <DataDetailsItem 
                type={DATA_DETAILS_ITEM_TYPE.text} 
                title={"Title"} 
                value={eventData.title}
              />
              <DataDetailsItem 
                type={DATA_DETAILS_ITEM_TYPE.text} 
                title={"Age restriction"} 
                value={eventData.ageRestriction}
              />
              <DataDetailsItem 
                type={DATA_DETAILS_ITEM_TYPE.text} 
                title={"Location"} 
                value={eventData.location}
              />
              <DataDetailsItem 
                type={DATA_DETAILS_ITEM_TYPE.text} 
                title={"Event type"} 
                value={eventData.eventType}
              />
              <DataDetailsItem 
                type={DATA_DETAILS_ITEM_TYPE.text} 
                title={"Date"} 
                value={`${eventData.startDate} - ${eventData.endDate}`}
              />
              <DataDetailsItem 
                type={DATA_DETAILS_ITEM_TYPE.text} 
                title={"Registrable"} 
                value={eventData.isRegistrable}
              />
              {(eventData.isRegistrable == "Yes") && 
                <DataDetailsItem 
                  type={DATA_DETAILS_ITEM_TYPE.text} 
                  title={"Registrable link"} 
                  value={eventData.registrableLink}
                />
              }
              <DataDetailsItem 
                type={DATA_DETAILS_ITEM_TYPE.html} 
                title={"Description"} 
                value={eventData.description} 
                showSeparator={false}
              />
            </Grid>
          </div>
        </Box>
      }
      { 
        !showEditModal && error && <ErrorMessage/>
      }
      {
        showEditModal && <UpdateEvent event={eventData} setShow={setShowEditModal}/>
      }
      { openCreateNotificationModal && <CreateNotificationModal openModal={openCreateNotificationModal} setOpenModal={setOpenCreateNotificationModal} onSaveChangesCallback={handleSaveEventReminderCallback}/> }
    </>
  );
};

export default Event;
