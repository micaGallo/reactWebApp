import React, { useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import Header from "../../components/Header";

const Cms = () => {
  const [editorValue, setEditorValue] = useState('');

  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      // Replace 'YOUR_IMAGE_UPLOAD_API_ENDPOINT' with the API endpoint for image upload on your server
      // const response = await axios.post('YOUR_IMAGE_UPLOAD_API_ENDPOINT', formData);
  
      // Replace 'YOUR_IMAGE_URL_PREFIX' with the base URL where your images are hosted
      // return `${'YOUR_IMAGE_URL_PREFIX'}${response.data.imageUrl}`;

      return file.name;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

   // Function to handle image insertion in the editor
   const handleImageInsert = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];

      if (file) {
        const imageUrl = await handleImageUpload(file);
        return imageUrl;
        // this next code is used to position the image, but for this we need the IMAGE that we get from the server..
        // const range = quillRef.current.getEditor().getSelection();
        // quillRef.current.getEditor().insertEmbed(range.index, 'image', imageUrl);
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // Options for formatting
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers
        [{ list: 'ordered' }, { list: 'bullet' }], // Lists
        [{ align: [] }], // Text alignment
        ['image'], // Image upload button
        ['link'], // Link
        ['clean'], // Remove formatting
      ],
      handlers: {
        // image: handleImageInsert, // Attach the image handler to the image button
      },
    },
    // Add other modules you need
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'align',
    'link',
    'image', // Enable image format
  ];

  // Function to track changes in the editor content
  const handleEditorChange = (value) => {
    debugger;
    setEditorValue(value);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="cmsContainer">
        <Header title="CMS" />
        <div>
          <ReactQuill
            value={editorValue}
            onChange={handleEditorChange}
            modules={modules}
            formats={formats}
            placeholder="Write something..."
          />
        </div>
      </div>
    </Box>
  );
};

export default Cms;
