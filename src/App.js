import React from "react";
import ActionCard from "./components/ActionCard";
import ContactForm from "./components/ContactForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import RegisterForm from "./components/RegisterForm";
import ContactAdmin from "./views/ContactAdmin";

// React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import Homepage from "./views/Homepage";
import ActionsList from "./views/ActionsList";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/actions" element={<ActionsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
