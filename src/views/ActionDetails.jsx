import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function ActionDetails(props) {
  const { id } = useParams();

  const [action, setAction] = useState([]);

  useEffect(() => {
    console.log("PROPS ID", id);
    fetch(`/actions/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setAction(res.data);
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }, []);

  const RenderActions = () => {
    return (
      <div>
        <h2>{action.title}</h2>
        <img></img>
        <h4>Organisateur : </h4>
        <p>{action.origanizer_id}</p>
        <h4>Date : </h4>
        <p>{action.date}</p>
        <h4>Horaires : </h4>
        <p>{action.time}</p>
        <h4>Détails : </h4>
        <p>{action.description}</p>
        <h4>Contacter l'organisateur : </h4>
        <ContactForm />
        <Outlet />
      </div>
    );
  };

  return RenderActions();
}

export default ActionDetails;
