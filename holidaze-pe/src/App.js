import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/home";
import LogIn from "./pages/login/login";
import Register from "./pages/register/register";
import Venues from "./pages/venues/venues";
import Profile from "./pages/profile/profile";
import RouteNotFound from "./pages/notfound/notfound";
import Venue from "./pages/specificVenue/specificVenue";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="venues" element={<Venues />} />
        <Route path="specific/:id" element={<Venue />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
