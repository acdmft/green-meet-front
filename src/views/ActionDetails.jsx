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
      <div className="flex flex-col items-center m-10">
        <h2 className="text-gmlime-light text-2xl">{action.title}</h2>
        <img></img>
        <div className="flex flex-row">
          <h4>Organisateur : </h4>
          <p>{action.organiser_id}</p>
        </div>
        <div className="flex flex-row">
          <h4>Date : </h4>
          <p>{action.date}</p>
        </div>
        <div className="flex flex-row">
          <h4>Horaires : </h4>
          <p>{action.time}</p>
        </div>
        <div className="flex flex-row">
          <h4>Adresse :</h4>
          <p>{action.address}</p>
        </div>
        <div>
          <h4>Détails : </h4>
          <p>{action.description}</p>
        </div>
        <div>
          <h4>Contacter l'organisateur : </h4>
          <ContactForm />
        </div>
      </div>
    );
  };

  return RenderActions();
}

export default ActionDetails;
