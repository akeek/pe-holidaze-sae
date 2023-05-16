import React from "react";
import { Routes, Route } from "react-router-dom";

/* Pages */
import Layout from "./components/Layout";
import Home from "./pages/home/home";
import LogIn from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
