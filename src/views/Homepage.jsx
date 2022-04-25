import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActionCard from "../components/ActionCard";
import ArrowButton from "../components/ArrowButton";
import Title from "../components/Title";

function Homepage() {
  let navigate = useNavigate();

  const [actions, setActions] = useState([]);
  useEffect(() => {
    fetch("/actions")
      .then((res) => res.json())
      .then((res) => {
        setActions(res.data);
        console.log(actions);
      });
  }, []);

  const handleClick = () => {
    navigate("/actions");
  };

  return (
    <>
      <div>
        <Title />
        {/* <img
          src="/img/balais.jpg"
          alt="Balais"
          className="h-72 md:h-80 w-full md:w-5/6 lg:h-96 mx-auto"
        /> */}
        <div>
          <h3
            className="my-11 mx-12 text-gmgreen font-bold text-xl"
            id="contenu"
          >
            Qu'est-ce que Green Meet ?
          </h3>
          <p className="mx-12 text-justify my-10 text-lg">
            Green Meet a vu le jour suite à un constat : Beaucoup de personnes
            se réunissent pournettoyer les parcs, plages, quartiers, etc. Toutes
            ces personnes s'organisent via WhatsApp ou Facebook. Ils n'ont pas
            de plateforme existante pour s'organiser. C'est là que Green Meet
            intervient.
            <br />
            <span className="font-bold text-gmvert-dark">
              Green Meet est votre réseau social d'organisations et rencontres
              d'actions citoyennes de nettoyage de quartiers.
            </span>
          </p>
          <h3
            className="my-11 mx-12 text-gmgreen font-bold text-xl"
            id="contenu"
          >
            Les dernières actions sur Green Meet :
          </h3>
        </div>
      </div>
      <div className="flex justify-center mx-6 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {actions &&
            actions
              .filter((action) => {
                return action.status === 0;
              })
              .slice(0, 3)
              .map((action) => {
                return (
                  <ActionCard
                    id={action.action_id}
                    key={action.action_id}
                    title={action.title}
                    description={action.description}
                  />
                );
              })}
        </div>
      </div>
      {/* <div className="text-right m-6">
        <Link to="/actions">Je recherche une action dans ma ville</Link>
      </div> */}
      <div className="text-right mr-10 mb-11">
        <ArrowButton onClick={handleClick}>
          Je recherche une action près de chez moi
        </ArrowButton>
      </div>
    </>
  );
}

export default Homepage;
