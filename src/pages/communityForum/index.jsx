import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import "./index.scss";
import { headCells, postRows } from "../../helpers/post/datatablesource";
import SortTable from "../../components/SortTable"


const CommunityForum = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [forumData, seForumData] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    console.log("handleDelete forum");
  };

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          communityForum: {
            id: 2,
            title: "NSF Active Duty Seals",
            description: "Lorem ipsum dolor sit amet",
            photo: "https://images.unsplash.com/photo-1588001832198-c15cff59b078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          }
        }
        return data;
      }).then((data) => {
        seForumData(data.communityForum);
      }).catch(error => {
        setError(error);
      });
  }, [])

  const handleClick = () => {
		setShow(true);
    debugger;
    console.log(forumData);
	};

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  console.log(forumData)

  return(
    <>
      { !error && forumData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="boxTitle">
            <div className="forumTitleContainer">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={forumData.photo}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
              <Header title={forumData.title} subtitle={forumData.description} subtitleColor="#757575"/>
            </div>
            <Button variant="outlined" href={`/post/new`}>Add Post</Button>
          </div>
          <SortTable tableTitle={"Post list"} menuItems={menuItems} headCells={headCells} rows={postRows} redirectTo={"/posts/"}/>  
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

export default CommunityForum;
