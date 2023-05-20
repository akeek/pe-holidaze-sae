import React from "react";
import { Routes, Route } from "react-router-dom";

/* Pages */
import Layout from "./components/Layout";
import Home from "./pages/home/home";
import LogIn from "./pages/login/login";
import Register from "./pages/register/register";
import Venues from "./pages/venues/venues";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="venues" element={<Venues />} />
      </Route>
    </Routes>
  );
}

export default App;
