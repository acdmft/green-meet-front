import React from "react";
import RegisterForm from "../components/RegisterForm";
import Title from "../components/Title";

function Register() {
  return (
    <div className="registerPage bg-green-50 lg:h-screen">
            <div className="pt-24">
        <h1 className="text-center text-lg md:text-xl lg:text-3xl">
         S'enregistrer
        </h1>
      </div>
      <h3
        className="text-center my-11 text-sm md:text-lg font-bold"
        id="contenu"
      >
        Connectez-vous maintenant et rejoignez la communauté
      </h3>
    
      
      <RegisterForm />
    </div>
  );
}

export default Register;
