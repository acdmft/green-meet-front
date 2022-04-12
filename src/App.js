import React from "react";
import ActionCard from "./components/ActionCard";
import ContactForm from "./components/ContactForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import RegisterForm from "./components/RegisterForm";
import ContactAdmin from "./views/ContactAdmin";

// Views
import Homepage from "./views/Homepage";

function App() {
  return (
    <div>
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
