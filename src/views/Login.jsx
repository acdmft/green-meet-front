import React from "react";
import LoginForm from "../components/LoginForm";
import Title from "../components/Title";

function Login() {
  return (
    <div>
      <Title />
      <h3 className="text-center my-6">Connexion</h3>
      <LoginForm />
    </div>
  );
}

export default Login;
