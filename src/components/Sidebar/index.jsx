import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  Link
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <Box>
      <IconButton size="large" variant="container" onClick={handleClick}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Drawer
        aria-label="muiDrawer"
        anchor="left"
        open={isOpen}
        onClose={()=>setIsOpen(false)}
      >
        <Stack width={200} spacing={2} mx={2}>
          <Typography variant="h5" color="secondary" align="center">
            Drawer Items
          </Typography>
          <Link href="/home" underline="hover">Home</Link>
          <Link href="/contact" underline="hover">Contact</Link>
          <Link href="/about" underline="hover">About</Link>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
