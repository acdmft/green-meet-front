import React from "react";
import ContactForm from "../components/ContactForm";

function ActionDetails() {
  return (
    <div>
      <h2>Titre action (Nettoyage parc,...)</h2>
      <img></img>
      <h4>Organisateur : </h4>
      <p>PROPS</p>
      <h4>Date : </h4>
      <p>PROPS</p>
      <h4>Horaires : </h4>
      <p>PROPS</p>
      <h4>Détails : </h4>
      <p>
        PROPS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
        perspiciatis cumque, cum ea esse minus voluptate adipisci excepturi
        deserunt quos nemo dolor quis iusto doloribus cupiditate eius fugit
        itaque. Culpa.
      </p>
      <h4>Contacter l'organisateur : </h4>
      <ContactForm />
    </div>
  );
}

export default ActionDetails;
