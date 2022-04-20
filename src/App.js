import { React, useContext, createContext, useState } from "react";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// React toastify 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

// Context
export const AuthContext = createContext();

function App() {
  const handleClick = () => {
    console.log("COUCOU");
  };
  // isAuthenticated state (goes in context value)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <BrowserRouter classname="relative">
        <div className="flex flex-col justify-between min-h-screen">
          <NavBar />
          <div className="flex-grow">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/actions" element={<ActionsList />} />
              <Route path="/actions/:id" element={<ActionDetails />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/contributors" element={<Contributors />} />
              <Route exact path="/mentions" element={<Mentions />} />
              <Route exact path="/contact" element={<ContactAdmin />} />
              <Route exact path="/addAction" element={<AddAction />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
