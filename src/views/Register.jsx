import React from "react";
import RegisterForm from "../components/RegisterForm";
import Title from "../components/Title";

function Register() {
  return (
    <div className="registerPage">
      <div className="pt-24">
        <h1 className="text-center text-lg md:text-xl lg:text-3xl text-blue-500">
          S'enregistrer
        </h1>
      </div>
      <h3
        className="text-center my-12 text-sm md:text-lg font-bold text-blue-500"
        id="contenu"
      >
        Connectez-vous maintenant et rejoignez la communauté
      </h3>

      <RegisterForm />
    </div>
  );
}

export default Register;
