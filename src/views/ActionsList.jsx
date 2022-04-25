import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "../App.css";

// Components
import ActionCard from "../components/ActionCard";
import Button from "../components/Button";

function ActionsList() {
  const [actions, setActions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filteredActions, setFilteredActions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let convertedInput = data.city
      .split(/[\s-]+/)
      .reduce((prev, curr) => `${prev.toLowerCase()}-${curr.toLowerCase()}`);
    setUserInput(convertedInput);
  };

  useEffect(() => {
    if (userInput !== "") {
      setIsLoaded(true);

      fetch(`/actions?city=${userInput}`)
        .then((res) => res.json())
        .then((res) => {
          setFilteredActions(res.data);
          setIsLoaded(false);
        })
        .catch((err) => {
          console.error("ERROR", err);
        });
    }
  }, [userInput]);

  useEffect(() => {
    setIsLoaded(true);

    fetch("/actions")
      .then((res) => res.json())
      .then((res) => {
        setActions(res.data);
        setIsLoaded(false);
      });
  }, []);
  console.log("ActionsList");

  const RenderActions = () => {
    if (!actions) {
      return <p>Aucune action enregistrée</p>;
    }
    return actions
      .filter((action) => {
        return action.status === 0;
      })
      .slice(0, 12)
      .map((action, index) => (
        <ActionCard
          id={action.action_id}
          key={index}
          title={action.title}
          description={action.description}
        />
      ));
  };

  const RenderFilteredActions = () => {
    if (filteredActions.length === 0) {
      return isLoaded ? (
        <div className="ml-96 mt-52 loader flex flex-col items-center">
          <div className="loader2">
            <div className="round1"></div>
            <div className="round2"></div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex flex-col items-center text-center">
          <p className="text-red-500 text-xl md:text-3xl">
            Aucune action ne correspond à votre recherche :(
          </p>
          <p className="md:text-xl text-lg">
            Etendez votre recherche ou{" "}
            <Link to="/addAction">
              <span className="text-gmvert-dark font-bold">
                créer une action
              </span>
            </Link>
          </p>
        </div>
      );
    }

    return filteredActions
      .filter((action) => {
        return action.status === 0;
      })
      .map((action) => (
        <ActionCard
          id={action.action_id}
          key={action.action_id}
          title={action.title}
          description={action.description}
        />
      ));
  };

  return (
    <div id="contenu" className="flex flex-col justify-center actionsList">
      <div>
        <form
          className="flex flex-row mx-auto items-center w-1/2 space-x-4 my-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full">
            {/* <label htmlFor="city">City</label> */}
            <input
              className="border-2 h-10 pl-2"
              {...register("city", {
                required: true,
                maxLength: 150,
                minLength: 1,
              })}
              type="text"
              name="city"
              id="city"
              placeholder="Entrez votre ville"
              // value={localStorage.getItem("email")}
            />
            {/* Message d'erreur si input invalide : */}
            {errors.city && (
              <span className="w-full text-red-600 italic text-xs">
                Please enter a valid city
              </span>
            )}
          </div>

          <Button type="submit" className="w-full mt-6">
            Rechercher
          </Button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-6">
        {!userInput ? RenderActions() : RenderFilteredActions()}
      </div>
    </div>
  );
}

export default ActionsList;
