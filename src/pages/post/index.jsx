import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from "../../components/Header";
import { headCells, commentRows } from "../../helpers/comment/datatablesource";
import CreateModal from "../../components/CreateModal";
import PostTable from "../../components/PostTable";
import DataDetailsPicture from '../../components/DataDetailsPicture';
import "./index.scss";

const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);
  const [openAddCommentModal, setOpenAddCommentModal] = useState(false);

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
                <DataDetailsPicture 
                  pictureUrl={postData.authorPicture} 
                  defaultPictureUrl={'https://www.asofiduciarias.org.co/wp-content/uploads/2018/06/sin-foto.png'} 
                  borderRadius="50%"
                />
                <Header title={postData.author} subtitle={postData.authorRole} subtitleColor="#757575"/>
              </div>
              <div className="postDescriptionContainer">
                <Typography>{postData.description}</Typography>
              </div>
            </div>
            <Button variant="outlined" onClick={() => setOpenAddCommentModal(true)}>Add Comment</Button>
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
      { 
        error && <ErrorMessage/>
      }
      { openAddCommentModal && <CreateModal openModal={openAddCommentModal} setOpenModal={setOpenAddCommentModal} onCreateCallback={handleCreateComment} title={"Add a comment"} placeholder={"Write a new comment"}/> }
    </>
  );
};

export default Post;
