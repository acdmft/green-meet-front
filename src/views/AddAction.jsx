import React from "react";
import { useForm } from "react-hook-form";

// Components
import Button from "../components/Button";
import Title from "../components/Title";

function AddAction() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Title />
      <div className="mt-16">
        <form
          className="flex flex-col mx-auto items-center "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-3/4 gap-4 lg:w-1/2 xl:w-1/3 mb-10 space-y-4 md:space-y-6">
            <div className="flex flex-col">
              <label htmlFor="title">Titre de l'action</label>
              <input
                name="title"
                className="border-2"
                {...register("title", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                })}
              />
              {errors.title && (
                <span className="w-full text-red-600 italic text-xs">
                  Merci d'indiquer le titre de votre action
                </span>
              )}
            </div>

            <div className="space-y-2 border-2 p-4 bg-gmlime-light">
              <div className="space-y-2">
                <label htmlFor="adress" className="font-bold">
                  Adresse
                </label>
                <div
                  className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0"
                  name="adress"
                >
                  <div className="flex flex-row space-x-2">
                    <div className="flex flex-col">
                      <label htmlFor="streetNumber">N° de rue</label>
                      <input
                        className="border-2 w-20"
                        name="streetNumber"
                        type="number"
                        {...register("streetNumber", { min: 1, maxLength: 4 })}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="streetType">Type</label>
                      <select
                        {...register("streetType")}
                        className="border-2 w-28 h-7"
                        name="streetType"
                      >
                        <option selected value="none"></option>
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
                  <div className="flex-grow">
                    <div className="flex flex-col">
                      <label htmlFor="streetName">Nom de la rue</label>
                      <input
                        className="border-2"
                        name="streetName"
                        {...register("streetName", { required: true })}
                      />
                    </div>
                  </div>
                </div>
                {errors.street && (
                  <span className="w-full text-red-600 italic text-xs">
                    Champs obligatoire
                  </span>
                )}
              </div>

              <div className="flex flex-row space-x-2">
                <div className="flex flex-col">
                  <label htmlFor="zipCode">Code Postal</label>
                  <input
                    name="zipCode"
                    className="border-2 w-32"
                    type="number"
                    {...register("zipCode", { min: 1, maxLength: 4 })}
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <label htmlFor="city">Ville</label>
                  <input
                    className="border-2"
                    name="city"
                    {...register("city", { required: true })}
                  />
                  {errors.city && (
                    <span className="w-full text-red-600 italic text-xs">
                      Champs obligatoire
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full place-content-evenly md:space-x-1">
              <div className="flex flex-col">
                <label htmlFor="begin">Date de début</label>
                <input
                  name="begin"
                  id="begin"
                  className="border-2"
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
              <div className="flex flex-col">
                <label htmlFor="end">Date de fin</label>
                <input
                  name="end"
                  id="end"
                  className="border-2"
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

            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <textarea
                rows="12"
                className="border-2 h-full"
                {...register("description", {
                  required: true,
                  max: 200,
                  min: 50,
                  maxLength: 500,
                  minLength: 20,
                })}
              />

              {errors.description && (
                <span className="w-full text-red-600 italic text-xs">
                  Merci d'indiquer une description complète
                </span>
              )}
            </div>
          </div>
          <Button type="submit">Créer l'action</Button>
        </form>
      </div>
    </>
  );
}

export default AddAction;
