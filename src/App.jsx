import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Sidenav from "./components/Sidenav";
import Home from "./pages/home";
import Logout from "./pages/logout";
import Login from "./pages/login";
import Users from "./pages/users";
import User from "./pages/user"
import Forums from "./pages/forums";
import Forum from "./pages/forum"
import PushNotifications from "./pages/pushNotifications";
import Events from "./pages/events";
import Event from "./pages/event"
import NewUser from "./pages/newUser";
import NewEvent from "./pages/newEvent";
import Post from "./pages/post";
import Comment from "./pages/comment";
import { AuthProvider } from "./contexts/AuthContext"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          {/* <Sidenav /> */}
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/" exact element={
              <>
                <Sidenav/>
                <Home />
              </>
            } />
            <Route path="/users" element={
              <>
                <Sidenav/>
                <Users />
              </>
            } />
            <Route path="/users/:id" element={
              <>
                <Sidenav/>
                <User />
              </>
            } />
            <Route path="/users/new" element={
              <>
                <Sidenav/>
                <NewUser />
              </>
            } />
            <Route path="/forums" element={
              <>
                <Sidenav/>
                <Forums />
              </>
            } />
            <Route path="/forums/:forumId" element={
              <>
                <Sidenav/>
                <Forum />
              </>
            } />
            <Route path="/forums/:forumId/posts/:postId" element={
              <>
                <Sidenav/>
                <Post />
              </>
            } />
            <Route path="/forums/:forumId/posts/:postId/comments/:commentId" element={
              <>
                <Sidenav/>
                <Comment />
              </>
            } />
            <Route path="/events" exact element={
              <>
                <Sidenav/>
                <Events />
              </>
            } />
            <Route path="/events/new" element={
              <>
                <Sidenav/>
                <NewEvent />
              </>
            } />
            <Route path="/events/:eventId" element={
              <>
                <Sidenav/>
                <Event />
              </>
            } />
            <Route path="/notifications" exact element={
              <>
                <Sidenav/>
                <PushNotifications />
              </>
            } />
            <Route path="/logout" exact element={
              <>
                <Sidenav/>
                <Logout />
              </>
            } />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </AuthProvider>
  );
}
