import React from "react";
import LoginForm from "../components/LoginForm";
import "../App.css";

function Login() {
  return (
    <div className="loginPage h-screen">
      <div className="pt-24">
        <h1 className="text-center text-lg md:text-xl lg:text-3xl">
          Connexion
        </h1>
      </div>
      <h3
        className="text-center my-6 text-sm md:text-lg font-bold"
        id="contenu"
      >
        Pour participer, connectez-vous à votre compte
        {/* Connectez-vous maintenant et rejoignez la communauté */}
      </h3>
      <LoginForm />
    </div>
  );
}

export default Login;
