import { React, useState, useContext } from "react";

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
import Button from "./components/ArrowButton";
import ArrowButton from "./components/ArrowButton";
import ActionDetails from "./views/ActionDetails";

function App() {
  const handleClick = () => {
    console.log("COUCOU");
  };
  return (
    <BrowserRouter classname="relative">
      <div className="flex flex-col justify-between min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/actions" element={<ActionsList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/mentions" element={<Mentions />} />
            <Route path="/contact" element={<ContactAdmin />} />
            <Route path="/action" element={<ActionDetails />} />
          </Routes>
        </div>
        <Footer classname="flex flex-row" />
      </div>
    </BrowserRouter>
  );
}

export default App;
