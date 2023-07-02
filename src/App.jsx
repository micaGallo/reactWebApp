import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Logout from "./pages/logout";
import Users from "./pages/users";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/logout" exact element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
