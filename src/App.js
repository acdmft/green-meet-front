import React from "react";
import ActionCard from "./components/ActionCard";
import LoginForm from "./components/LoginForm";

// Views
import Homepage from "./views/Homepage";

function App() {
  return (
    <div>
      <Homepage />
      <ActionCard />
      <LoginForm />
    </div>
  );
}

export default App;
