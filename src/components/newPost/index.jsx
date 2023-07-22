import React from "react";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./index.scss";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  zindex: 1000000000,
};

const NewPost = ({openModal, setOpenModal}) => {
  const form = useForm({
    defaultValues: {
      title: 'currentUser.role',
      description: '',
      picture: 'currentUser.photo',
      author: 'currentUser', //ver como agregarlo
      replies: 0
    }
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 id="parent-modal-title">New Post</h2>
            <TextField
              id="outlined-multiline-static"
              multiline
              fullWidth
              placeholder="Write a new post"
              rows={10}
              {...register('description', {
                required: 'Description is required'
              })}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
            <div className="postButtonContainer">
              <Button variant="outlined" onClick={() => setOpenModal(false)}>Cancel</Button>
              <Button variant="contained" type="submit">Save changes</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default NewPost;
