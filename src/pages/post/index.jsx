import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import "./index.scss";
import UpdateUser from "../../components/updateUser";
import { headCells, commentRows } from "../../helpers/comment/datatablesource";
import SortTable from "../../components/SortTable"


const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    console.log("handleDelete");
  };

  const menuItems = [
    {name: 'Delete', action: handleDelete},
  ];

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

    fetch(url)
      .then((response) => {
        const data = {
          post: {
            title: "Test post 1",
            date: "03/09/2020",
            comments: "123",
            views: "200",
          }
        }
        return data;
      }).then((data) => {
        setPostData(data.post);
      }).catch(error => {
        setError(error);
      });
  }, [])

  const [show, setShow] = useState(false);

  const handleClick = () => {
		setShow(true);
    debugger;
    console.log(postData)
	};

  return(
    <>
      { !show && !error && postData && 
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="titleContainer">
                <Header title="User profile" />
                <Button variant="outlined" onClick={handleClick}>Edit Post</Button>
            </div>
            <div className="container">
                <Grid container>
                <Grid item xs={3}>Title</Grid>
                <Grid item xs={9} sx={{ color: "#757575" }}>{postData.title}</Grid>
                <Box
                    component="span"
                    sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
                />
                <Grid item xs={3}>Published Date</Grid>
                <Grid item xs={9} sx={{ color: "#757575" }}>{postData.date}</Grid>
                <Box
                    component="span"
                    sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
                />
                <Grid item xs={3}>Amount of Comments</Grid>
                <Grid item xs={9} sx={{ color: "#757575" }}>{postData.comments}</Grid>
                <Box
                    component="span"
                    sx={{ display: "block", width: "100%", borderBottom: "1px solid #c5c5c5", my: 2 }}
                />
                <Grid item xs={3}>Amount of Views</Grid>
                <Grid item xs={9} sx={{ color: "#757575" }}>{postData.views}</Grid>
                </Grid>

                <Box paddingTop="40px">
                    <SortTable tableTitle={"Comment list"} menuItems={menuItems} headCells={headCells} rows={commentRows} redirectTo={"/posts/"}/>
                </Box>
            </div>
        </Box>
      }
      { !show && error &&
        <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: 'center', fontSize: 'h6.fontSize'}}>
          <Typography style={{ color: '#bf0707' }} variant="body1"> 
            Upss, something wents wrong
          </Typography>
        </Box>
      }
      {
        // show && <UpdateUser user={postData} setShow={setShow}/>
      }
    </>
  );
};

export default Post;
