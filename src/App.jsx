import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Sidenav from "./components/Sidenav";
import Home from "./pages/home";
import Logout from "./pages/logout";
import Users from "./pages/users";
import User from "./pages/user"
import Forums from "./pages/forums";
import Forum from "./pages/forum"
import PushNotifications from "./pages/pushNotifications";
import Events from "./pages/events";
import Event from "./pages/event"
import NewUser from "./pages/newUser";
import Post from "./pages/post";
import Comment from "./pages/comment";
import Cms from "./pages/cms";
import NewPushNotification from "./pages/newPushNotification";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/users/new" element={<NewUser />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/:forumId" element={<Forum />} />
            <Route path="/forums/:forumId/posts/:postId" element={<Post />} />
            <Route path="/forums/:forumId/posts/:postId/comments/:commentId" element={<Comment />} />
            <Route path="/cms" exact element={<Cms />} />
            <Route path="/events" exact element={<Events />} />
            <Route path="/events/:eventId" element={<Event />} />
            <Route path="/notifications" exact element={<PushNotifications />} />
            <Route path="/notifications/new" exact element={<NewPushNotification />} />
            <Route path="/logout" exact element={<Logout />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}
