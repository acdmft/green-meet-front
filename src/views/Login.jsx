import React from "react";
import LoginForm from "../components/LoginForm";
import Title from "../components/Title";

function Login() {
  return (
    <div className="h-screen">
      {/* TO DO : h-screen to force footer to be sticky bottom */}
      <Title />
      <h3>Connexion</h3>
      <LoginForm />
    </div>
  );
}

export default Login;
