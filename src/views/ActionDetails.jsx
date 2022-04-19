import React, { useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function ActionDetails(props) {
  const { id } = useParams();
  console.log("ACTION DETAILS");
  useEffect(() => {
    console.log("PROPS ID", id);
    fetch(`/actions/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }, []);

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
      <Outlet />
    </div>
  );
}

export default ActionDetails;
