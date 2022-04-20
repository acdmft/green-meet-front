import React from "react";
import RegisterForm from "../components/RegisterForm";
import Title from "../components/Title";

function Register() {
  return (
    <div>
      <Title />
      <h3 className="text-center my-6" id="contenu">
        S'enregistrer
      </h3>
      <RegisterForm />
    </div>
  );
}

export default Register;
