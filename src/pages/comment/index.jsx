import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from "../../components/Header";
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

const Comment = () => {
  const { id } = useParams();
  return (
    <div>hola</div>
  )
};

export default Comment;
