import React from "react";
import { Routes, Route } from 'react-router-dom'; // ✅ Only Routes and Route
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Support from "./pages/Support";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
};

export default App;
