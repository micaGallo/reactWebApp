import React, { useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Box from '@mui/material/Box';
import Header from "../../components/Header";

const Cms = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);

    console.log(value);
  };

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };
  
  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="cmsContainer">
        <Header title="CMS" />
        <div>
          <ReactQuill modules={module} theme="snow" value={content} onChange={handleChange}/>
        </div>
      </div>
    </Box>
  );
};

export default Cms;
