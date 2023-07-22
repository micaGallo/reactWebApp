import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Sidenav from "./components/Sidenav";
import Home from "./pages/home";
import Logout from "./pages/logout";
import Users from "./pages/users";
import User from "./pages/user"
import CommunityForums from "./pages/communityForums";
import CommunityForum from "./pages/communityForum"
import PushNotifications from "./pages/pushNotifications";
import NewUser from "./pages/newUser";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/users">
              <Route index element={<Users />} />
              <Route path=":id" element={<User />} />
              <Route path="new" element={<NewUser />} />
            </Route>
            <Route path="/communityForums">
              <Route index element={<CommunityForums />} />
              <Route path=":id" element={<CommunityForum />} />
            </Route>
            <Route path="/notifications" exact element={<PushNotifications />} />
            <Route path="/logout" exact element={<Logout />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}
