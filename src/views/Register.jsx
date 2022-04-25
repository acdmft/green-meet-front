import React from "react";
import RegisterForm from "../components/RegisterForm";
import Title from "../components/Title";

function Register() {
  return (
    <div className="registerPage">
      <div className="bg-white bg-opacity-50 sm:bg-transparent h-52 flex flex-col space-y-5">
        <div className="pt-24">
          <h1 className="text-center font-bold md:font-normal text-2xl lg:text-3xl text-blue-500">
            S'enregistrer
          </h1>
        </div>
        <h3
          className="text-center text-sm md:text-md font-bold text-blue-500"
          id="contenu"
        >
          Connectez-vous maintenant et rejoignez la communauté
        </h3>
      </div>

      <RegisterForm />
    </div>
  );
}

export default Register;
