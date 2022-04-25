import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// Components
import Button from "../components/Button";
// toastify
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import "../App.css";

function ModifyAction() {
  const { action_id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State
  const [action, setAction] = useState(null);
  const [address, setAddress] = useState();

  // useEffect : Fetch pour récupérer les infos à modifier
  useEffect(() => {
    // setIsLoading(false);
    fetch(`/actions/${action_id}`)
      .then((res) => res.json())
      .then((res) => {
        let city =
          res.data.city.charAt(0).toUpperCase() + res.data.city.slice(1);
        res.data.city = city.replace(/(-)/gi, " ");

        setAction(res.data);
        setAddress(JSON.parse(res.data.address));
        console.log("DATA", res.data);
        console.log("Address", JSON.parse(res.data.address));
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }, []);

  // On Submit PATCH action
  const onSubmit = (data) => {
    const [beginDate, beginTime] = data.begin.split("T");
    const [endDate, endTime] = data.end.split("T");
    // form address
    const address = {
      strTyp: data.streetType,
      strNumb: data.streetNumber,
      strNam: data.streetName,
      zipCode: data.zipCode,
    };
    // data to send
    const finalData = {
      title: data.title,
      address: JSON.stringify(address),
      beginDate: beginDate,
      beginTime: beginTime,
      endDate: endDate,
      endTime: endTime,
      // convert city input into string with "-" instead of " "
      city: data.city
        .split(/[\s-]+/)
        .reduce((prev, curr) => `${prev.toLowerCase()}-${curr.toLowerCase()}`),
      description: data.description,
      // should be taken from input value
      type: "ramassage",
    };
    // send data to the backend, route "/actions", method "POST"
    fetch(`/actions/${action_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("L'action est modifiée !");
          navigate(`/actions/${action_id}`);
        } else {
          toast.error("Quelque chose s'est mal passé, réessayez plus tard!");
        }
      })
      .catch((err) =>
        toast.error("Quelque chose s'est mal passé, réessayez plus tard!")
      );
  };

  // GUARD with spinner
  if (!action) {
    return (
      <div className="ml-96 mt-52 loader flex flex-col items-center">
        <div className="loader2">
          <div className="round1"></div>
          <div className="round2"></div>
        </div>
      </div>
    );

    // Render
  } else {
    return (
      <div className="addAction">
        <div className="pt-24">
          <h1 className="text-center text-white text-lg md:text-xl lg:text-3xl">
            Modifier votre action
          </h1>
        </div>
        <div id="contenu" className="mt-16">
          {/* FORM */}
          <form
            className="flex flex-col sm:mx-10 items-center mx-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Titre */}
            <div className="w-full gap-4 lg:w-1/2 mb-10 space-y-10">
              <div className="flex flex-col relative">
                <label className="text-white" htmlFor="title">
                  Titre de l'action
                </label>
                <input
                  defaultValue={action.title}
                  name="title"
                  className="border-2 rounded"
                  {...register("title", {
                    required: true,
                    maxLength: 30,
                    minLength: 5,
                  })}
                />
                {errors.title && (
                  <span className="w-full text-red-600 italic text-xs absolute top-14">
                    Merci d'indiquer le titre de votre action en 5 à 30
                    caractères
                  </span>
                )}
              </div>

              {/* Adresse */}
              <div className="space-y-6 border-2 rounded p-4 bg-gray-100 py-10">
                <div className="space-y-2 relative">
                  <label
                    htmlFor="adress"
                    className="font-bold absolute md:bottom-16 bottom-32"
                  >
                    Adresse
                  </label>
                  <div
                    className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0"
                    name="adress"
                  >
                    <div className="flex flex-row space-x-2">
                      {/* N° de rue */}
                      <div className="flex flex-col">
                        <label htmlFor="streetNumber">N° de rue</label>
                        <input
                          defaultValue={address.strNumb}
                          className="border-2 rounded w-20"
                          name="streetNumber"
                          type="number"
                          {...register("streetNumber", {
                            min: 1,
                            maxLength: 4,
                          })}
                        />
                      </div>
                      {/* Type de rue */}
                      <div className="flex flex-col">
                        <label htmlFor="streetType">Type</label>
                        <select
                          {...register("streetType")}
                          className="border-2 rounded w-28 h-7"
                          name="streetType"
                        >
                          <option selected value={address.strTyp}></option>
                          <option value="rue">rue</option>
                          <option value=" avenue">avenue</option>
                          <option value="boulevard">boulevard</option>
                          <option value="chemin">chemin</option>
                          <option value="villa">villa</option>
                          <option value="impasse">impasse</option>
                          <option value="passage">passage</option>
                          <option value="place">place</option>
                          <option value="lieu-dit">lieu-dit</option>
                        </select>
                      </div>
                    </div>
                    {/* Nom de la rue */}
                    <div className="flex-grow relative">
                      <div className="flex flex-col">
                        <label htmlFor="streetName">Nom de la rue</label>
                        <input
                          defaultValue={address.strNam}
                          className="border-2 rounded"
                          name="streetName"
                          {...register("streetName", { required: true })}
                        />
                        {errors.streetName && (
                          <span className="mt-0 w-full text-red-600 italic text-xs absolute top-14 left-36 sm:left-0">
                            Champs obligatoire
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.street && (
                    <span className="w-full text-red-600 italic text-xs">
                      Champs obligatoire
                    </span>
                  )}
                </div>
                {/* Code postal */}
                <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
                  <div className="flex flex-col">
                    <label htmlFor="zipCode">Code Postal</label>
                    <input
                      defaultValue={address.zipCode}
                      name="zipCode"
                      className="border-2 rounded w-32"
                      type="number"
                      {...register("zipCode", { min: 1, maxLength: 5 })}
                    />
                  </div>
                  {/* Ville */}
                  <div className="flex flex-col flex-grow relative">
                    <label htmlFor="city">Ville</label>
                    <input
                      defaultValue={action.city}
                      className="border-2 rounded"
                      name="city"
                      {...register("city", { required: true })}
                    />
                    {errors.city && (
                      <span className="w-full text-red-600 italic text-xs absolute top-14 left-36 sm:left-0">
                        Champs obligatoire
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* DATE Horaires */}
              <div className="flex flex-col md:flex-row w-full place-content-evenly md:space-x-1 space-y-4 md:space-y-0">
                <div className="flex flex-col">
                  <label className="text-white" htmlFor="begin">
                    Date de début
                  </label>
                  <input
                    name="begin"
                    id="begin"
                    className="border-2 rounded"
                    type="datetime-local"
                    placeholder="local"
                    {...register("begin", { required: true })}
                  />
                  {errors.horaireFin && (
                    <span className="w-full text-red-600 italic text-xs">
                      Champs obligatoire
                    </span>
                  )}
                </div>
                <div className="flex flex-col ">
                  <label className="text-white" htmlFor="end">
                    Date de fin
                  </label>
                  <input
                    name="end"
                    id="end"
                    className="border-2 rounded"
                    type="datetime-local"
                    placeholder="local"
                    {...register("end", { required: true })}
                  />
                  {errors.horaireFin && (
                    <span className="w-full text-red-600 italic text-xs">
                      Champs obligatoire
                    </span>
                  )}
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="flex flex-col relative ">
                <label className="text-white" htmlFor="description">
                  Description
                </label>
                <textarea
                  rows="12"
                  defaultValue={action.description}
                  className="border-2 rounded h-full"
                  {...register("description", {
                    required: true,
                    max: 200,
                    min: 50,
                    maxLength: 500,
                    minLength: 20,
                  })}
                />

                {errors.description && (
                  <span className="w-full text-red-600 italic text-xs absolute top-80">
                    Merci d'indiquer une description complète
                  </span>
                )}
              </div>
            </div>
            <div className="mb-10">
              <Button type="submit">Modifier l'action</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ModifyAction;
