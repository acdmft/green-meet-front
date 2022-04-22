import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import { AuthContext } from "../App";
import ActionsList from "./ActionsList";

import "../App.css";

function ActionDetails(props) {
  const { id } = useParams();
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [action, setAction] = useState(null);
  const [address, setAddress] = useState();
  const [user, setUser] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // setIsLoading(false);
    fetch(`/actions/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(id);
        let city =
          res.data.city.charAt(0).toUpperCase() + res.data.city.slice(1);
        res.data.city = city.replace(/(-)/gi, " ");

        setAction(res.data);
        setAddress(JSON.parse(res.data.address));
        // console.log("USER", res.data.organiser_id);

        fetch(`/account/${res.data.organiser_id}`)
          .then((res) => res.json())
          .then((res) => {
            setUser(res.data);
            setIsLoaded(true);
            // console.log("USER", res);
          });
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }, []);

  const handleSubmit = () => {
    if (context.isAuthenticated) {
      fetch(`/actions/${id}/join`, {
        method: "POST",
      })
        .then(() => {
          console.log("OK");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(id);
    } else {
      navigate("/login");
    }
  };

  const RenderActions = () => {
    if (action) {
      return (
        <div id="contenu" className="flex flex-col m-10 space-y-2">
          <h2 className="text-gmlime-light text-2xl mb-10">{action.title}</h2>
          <img></img>
          <div className="flex flex-row"></div>
          <div className="md:flex md:flex-row-reverse justify-between items-center">
            <div className="mb-7 md:mb-0">
              <Button onClick={handleSubmit}>Rejoindre l'action</Button>
            </div>
            <div className="flex flex-row">
              <h4 className="text-gmgreen-light text-lg">Organisateur : </h4>
              <p className="text-lg pl-2">
                {user.last_name} {user.first_name}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <h4 className="text-gmgreen-light text-lg">Date : </h4>
            <p className="text-lg pl-2">
              {action.begin_date.split("T")[0] !==
              action.end_date.split("T")[0] ? (
                <span>
                  {action.begin_date
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("/")}{" "}
                  -{" "}
                  {action.end_date.split("T")[0].split("-").reverse().join("/")}
                </span>
              ) : (
                <span>
                  {action.begin_date
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("/")}
                </span>
              )}
            </p>
          </div>
          <div className="flex flex-row">
            <h4 className="text-gmgreen-light text-lg">Horaires : </h4>
            <p className="text-lg pl-2">
              {action.begin_time} - {action.end_time}
            </p>
          </div>
          <div className="flex flex-row">
            <h4 className="text-gmgreen-light text-lg">Adresse :</h4>
            <p className="text-lg pl-2">
              {address.strNumb} {address.strTyp} {address.strNam}
            </p>
          </div>
          <div className="flex flex-row">
            <h4 className="text-gmgreen-light text-lg">Ville :</h4>
            <p className="text-lg pl-2">
              {address.zipCode} {action.city}
            </p>
          </div>
          <div>
            <h4 className="text-gmgreen-light text-lg">Détails : </h4>
            <p className="text-md">{action.description}</p>
          </div>
          <div>
            <h4 className="text-gmgreen-light text-lg">
              Contacter l'organisateur :
            </h4>
            <ContactForm />
          </div>
        </div>
      );
    }
  };

  if (user) {
    console.log(user);
    return RenderActions();
  } else {
    <div className="ml-96 mt-52 loader flex flex-col items-center">
      <div className="loader2">
        <div className="round1"></div>
        <div className="round2"></div>
      </div>
    </div>;
  }
}

export default ActionDetails;
