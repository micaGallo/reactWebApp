import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./index.scss";

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
            ageRestriction: "N/A",
            body: "<h1>esto es un titulo</h1><p><br></p><p><br></p><p><em>subtitulo here</em></p><p><br></p><p><br></p><ul><li><strong>chau!</strong></li></ul>",
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

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <>
      { !error && eventData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <div dangerouslySetInnerHTML={{ __html: eventData.body }} /> */}
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
