import { React, useContext } from "react";

// Components

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import Homepage from "./views/Homepage";
import ActionsList from "./views/ActionsList";
import Login from "./views/Login";
import Register from "./views/Register";
import Contributors from "./views/Contributors";
import Mentions from "./views/Mentions";
import ContactAdmin from "./views/ContactAdmin";
import ActionDetails from "./views/ActionDetails";
import AddAction from "./views/AddAction";

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
            {/* <Route path="/actions/:city" component={<ActionDetails />} /> */}
            <Route path="/addAction" element={<AddAction />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
