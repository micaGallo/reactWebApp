import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from "../../components/Header";
import "./index.scss";
import { headCells, commentRows } from "../../helpers/comment/datatablesource";
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

const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

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
            commentsAmount: 5,
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

  //show add comment component
  const [openModal, setOpenModal] = useState(false);

  const handleCreateComment = (data) => {
    console.log("handleCreateComment", data);
  };

  const handleDelete = (ids) => {
    console.log("handleDelete comments", ids);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <>
      { !error && postData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header title="POST DETAILS"/>
          <div className="boxTitlePost">
            <div>
              <div className="postTitleContainer">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={postData.authorPicture || 'https://www.asofiduciarias.org.co/wp-content/uploads/2018/06/sin-foto.png'}
                  style={{ borderRadius: "50%", objectFit: "cover"}}
                />
                <Header title={postData.author} subtitle={postData.authorRole} subtitleColor="#757575"/>
              </div>
              <div className="postDescriptionContainer">
                <Typography>  {postData.description}  </Typography>
              </div>
            </div>
            <Button variant="outlined" onClick={() => setOpenModal(true)}>Add Comment</Button>
          </div>
          <PostTable
            tableTitle={"To access more actions, please select one or more comments"}
            menuItems={menuItems}
            headCells={headCells}
            rows={commentRows}
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
      { openModal && <CreateModal openModal={openModal} setOpenModal={setOpenModal} onCreateCallback={handleCreateComment} title={"Add a comment"} placeholder={"Write a new comment"}/> }
    </>
  );
};

export default Post;
