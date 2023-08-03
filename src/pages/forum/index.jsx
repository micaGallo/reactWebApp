import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from "../../components/Header";
import "./index.scss";
import { headCells, postRows } from "../../helpers/post/datatablesource";
import CreateModal from "../../components/CreateModal";
import PostTable from "../../components/PostTable";

const h6Styles = {
  marginBottom: '15px',
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: 1.75,
  letterSpacing: '0.00938em',
  color: '#e6a307',
};

const Forum = () => {
  const { id } = useParams();
  const [forumData, seForumData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          forum: {
            id: 3,
            title: "NSF Active Duty Seals",
            description: "Lorem ipsum dolor sit amet",
            photo: "https://images.unsplash.com/photo-1588001832198-c15cff59b078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          }
        }
        return data;
      }).then((data) => {
        seForumData(data.forum);
      }).catch(error => {
        setError(error);
      });
  }, [])

  //show add post component
  const [openModal, setOpenModal] = useState(false);

  const handleCreatePost = (data) => {
    console.log("handleCreatePost", data);
  };

  const handleDelete = (ids) => {
    console.log("handleDelete posts", ids);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <>
      { !error && forumData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header title="FORUM DETAILS"/>
          <div className="boxTitleForum">
            <div className="forumTitleContainer">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={forumData.photo || "https://cannamazoo.com/assets/defaults/img/default-product-img.jpg"}
                style={{ borderRadius: "50%", objectFit: "cover"}}
              />
              <Header title={forumData.title} subtitle={forumData.description} subtitleColor="#757575"/>
            </div>
            <Button variant="outlined" onClick={() => setOpenModal(true)}>Add Post</Button>
          </div>
          <PostTable
            tableTitle={"To access more actions, please select one or more posts"}
            menuItems={menuItems}
            headCells={headCells}
            rows={postRows}
            redirectTo={`/forums/${forumData.id}/posts/`}
          />  
        </Box>
      }
      { error &&
        <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: 'center', fontSize: 'h6.fontSize'}}>
          <Typography style={{ color: '#bf0707' }} variant="body1"> 
            Upss, something wents wrong
          </Typography>
        </Box>
      }
      { openModal && <CreateModal openModal={openModal} setOpenModal={setOpenModal} onCreateCallback={handleCreatePost} title={"New post"} placeholder={"Write a new post"}/> }
    </>
  );
};

export default Forum;
