import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from "../../components/Header";
import { headCells, repliesRows } from "../../helpers/reply/datatablesource";
import PostTable from "../../components/PostTable";
import CreateModal from "../../components/CreateModal";
import ErrorMessage from "../../components/ErrorMessage";
import DataDetailsPicture from '../../components/DataDetailsPicture';
import "./index.scss";

const Comment = () => {
  const { id } = useParams();
  const [commentData, setCommentData] = useState(null);
  const [error, setError] = useState(null);
  const [openAddReplyModal, setOpenAddReplyModal] = useState(false);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          comment: {
            id: 1,
            author: "Marcus Samuels",
            authorPicture: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            authorRole: "Seal",
            description: "Life is like a rollercoaster, full of ups and downs, but it's the thrilling ride that makes it worthwhile!",
            commentsAmount: 2,
          }
        }
        return data;
      }).then((data) => {
        setCommentData(data.comment);
      }).catch(error => {
        setError(error);
      });
  }, [])

  const handleCreateReply = (data) => {
    console.log("handleCreateReply", data);
  };

  const handleDelete = (ids) => {
    console.log("handleDelete replies", ids);
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  return(
    <>
      { !error && commentData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header title="COMMENT DETAILS"/>
          <div className="boxTitleComment">
            <div>
              <div className="commentTitleContainer">
                <DataDetailsPicture 
                  pictureUrl={commentData.authorPicture} 
                  defaultPictureUrl={'https://www.asofiduciarias.org.co/wp-content/uploads/2018/06/sin-foto.png'} 
                  borderRadius="50%"
                />
                <Header title={commentData.author} subtitle={commentData.authorRole} subtitleColor="#757575"/>
              </div>
              <div className="commentDescriptionContainer">
                <Typography>{commentData.description}</Typography>
              </div>
            </div>
            <Button variant="outlined" onClick={() => setOpenAddReplyModal(true)}>Add Reply</Button>
          </div>
          <PostTable
            tableTitle={"To access more actions, please select one or more replies"}
            menuItems={menuItems}
            headCells={headCells}
            rows={repliesRows}
            redirectTo={``}
          />  
        </Box>
      }
      { 
        error && <ErrorMessage/>
      }
      { openAddReplyModal && <CreateModal openModal={openAddReplyModal} setOpenModal={setOpenAddReplyModal} onCreateCallback={handleCreateReply} title={"Add reply"} placeholder={"Write a new reply"}/> }
    </>
  );
};

export default Comment;
