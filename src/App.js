import { React, useState } from "react";

// Components
import ActionCard from "./components/ActionCard";
import ContactForm from "./components/ContactForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import RegisterForm from "./components/RegisterForm";

// React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import Homepage from "./views/Homepage";
import ActionsList from "./views/ActionsList";
import Login from "./views/Login";
import Register from "./views/Register";
import Footer from "./components/Footer";
import Contributors from "./views/Contributors";
import Mentions from "./views/Mentions";
import ContactAdmin from "./views/ContactAdmin";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/actions" element={<ActionsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/contact" element={<ContactAdmin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
