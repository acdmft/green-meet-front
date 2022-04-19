import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import ActionCard from "../components/ActionCard";
import Button from "../components/Button";

function ActionsList() {
  const [actions, setActions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filteredActions, setFilteredActions] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserInput(data.city.toLowerCase());
  };

  useEffect(() => {
    if (userInput !== "") {
      console.log("USER INPUT", userInput);
      fetch(`/actions?city=${userInput}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          setFilteredActions(res.data);
        })
        .catch((err) => {
          console.error("ERROR", err);
        });
    }
  }, [userInput]);

  useEffect(() => {
    fetch("/actions")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setActions(res.data);
      });
  }, []);

  const RenderActions = () => {
    return actions
      .slice(0, 12)
      .map((action) => (
        <ActionCard
          key={action.title}
          title={action.title}
          description={action.description}
        />
      ));
  };

  const RenderFilteredActions = () => {
    return filteredActions.map((action) => (
      <ActionCard
        key={action.title}
        title={action.title}
        description={action.description}
      />
    ));
  };

  return (
    <div className="flex flex-col justify-center">
      <div>
        <form
          className="flex flex-row mx-auto items-center w-1/2 space-x-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full">
            {/* <label htmlFor="city">City</label> */}
            <input
              className="border-2 h-10"
              {...register("city", {
                required: true,
                maxLength: 150,
                minLength: 1,
              })}
              type="text"
              name="city"
              id="city"
              placeholder="city"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {!userInput ? RenderActions() : RenderFilteredActions()}
        {filteredActions.length === 0 && (
          <div>
            <p className="text-red-500 text-center">
              Aucune action ne correspond à votre recherche :(
            </p>
            <p>
              Etendez votre recherche ou{" "}
              <a href="/addAction">Créer une action</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActionsList;
