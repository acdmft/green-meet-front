import { React, useContext, createContext, useState, useEffect } from "react";

import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// React toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import Profile from "./views/Profile";
import ModifyAction from "./views/ModifyAction";

// Context
export const AuthContext = createContext();

// Private route
const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext);
  return context.isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  useEffect(() => {
    fetch("/account/isLogged")
      .then((res) => res.json())
      .then((res) => {
        console.log("CONNECTE", res);
        if (res.message === "You are not logged in") {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      });
  }, []);

  const handleClick = () => {
    console.log("COUCOU");
  };
  // isAuthenticated state (goes in context value)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userInfo, setUserInfo }}
    >
      <BrowserRouter classname="relative">
        <div className="flex flex-col justify-between min-h-screen">
          <NavBar />
          <div className="flex-grow">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/actions" element={<ActionsList />} />
              <Route
                path="/actions/modify/:action_id"
                element={<ModifyAction />}
              />
              <Route path="/actions/:id" element={<ActionDetails />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/contributors" element={<Contributors />} />
              <Route exact path="/mentions" element={<Mentions />} />
              <Route exact path="/contact" element={<ContactAdmin />} />
              <Route
                exact
                path="/addAction"
                element={
                  <PrivateRoute>
                    <AddAction />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </div>
          <div className="bg-gray-800">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
