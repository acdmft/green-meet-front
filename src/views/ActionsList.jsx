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
    setUserInput(data.city);
  };

  useEffect(() => {
    if (userInput !== "") {
      fetch(`https://restcountries.com/v3.1/region/${userInput}`)
        .then((res) => res.json())
        .then((res) => {
          setFilteredActions(res);
        });
    }
  }, [userInput]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setActions(res);
      });
  }, []);

  function RenderActions() {
    actions.slice(0, 12).map((action) => {
      return (
        <ActionCard
          key={action.name}
          title={action.name.common}
          description={action.altSpellings}
        />
      );
    });
  }

  function RenderFilteredActions() {
    filteredActions.map((action) => {
      return (
        <ActionCard
          key={action.name}
          title={action.name}
          description={action.altSpellings}
        />
      );
    });
  }

  console.log(actions);
  //

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
      <div className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* {filteredActions === undefined ? ( */}
        {actions.length !== 0 && RenderActions()}
      </div>
    </div>
  );
}

export default ActionsList;
