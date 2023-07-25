import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from "../../components/Header";
import "./index.scss";
import { headCells, postRows } from "../../helpers/post/datatablesource";
import NewPost from "../../components/NewPost";
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

const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  debugger;
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          post: {
            id: 1,
            author: "Aytor Tilla",
            authorPicture: "https://cdn.eldestapeweb.com/eldestape/072023/1689894696213/mirtha-legrand---perder-frase-jpeg..webp?cw=770&ch=440&extw=jpeg",
            authorRole: "Seal",
            description: "Lorem ipsum dolor sit amet",
            commentsAmount: 1,
            forumId: 2,
          }
        }
        return data;
      }).then((data) => {
        setPostData(data.post);
      }).catch(error => {
        setError(error);
      });
  }, [])

  //show add post component
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = (ids) => {
    console.log("handleDelete posts", ids);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <>
      { !error && postData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header title="POST DETAILS"/>
          <div className="boxTitleForum">
            <div className="forumTitleContainer">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={postData.authorPicture}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
              <Header title={postData.author} subtitle={postData.authorRole} subtitleColor="#757575"/>
            </div>
            <Button variant="outlined" onClick={() => setOpenModal(true)}>Add Comment</Button>
          </div>
          <PostTable
            tableTitle={"To access more actions, please select one or more comments"}
            menuItems={menuItems}
            headCells={headCells}
            rows={postRows}
            redirectTo={`/forums/${postData.forumId}/posts/${postData.id}/comments/`}
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
      { openModal && <NewPost openModal={openModal} setOpenModal={setOpenModal}/> }
    </>
  );
};

export default Post;
