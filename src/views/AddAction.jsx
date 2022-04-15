import React from "react";
import { useForm } from "react-hook-form";

// Components
import Button from "../components/Button";

function AddAction() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form
        className="flex flex-col mx-auto items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-3/4 gap-4 lg:w-1/2 xl:w-1/3 mb-12 space-y-3">
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

          <div>
            <label htmlFor="adress">Adresse</label>
            <div className="flex flex-row w-full space-x-1" name="adress">
              <input
                className="border-2 w-16"
                type="number"
                {...register("streetNumber", { min: 1, maxLength: 4 })}
              />
              <select {...register("streetType")} className="border-2 w-16">
                <option selected value="none"></option>
                <option value="rue">rue</option>
                <option value=" avenue"> avenue</option>
                <option value=" boulevard"> boulevard</option>
                <option value=" chemin"> chemin</option>
                <option value=" villa"> villa</option>
                <option value=" impasse"> impasse</option>
                <option value=" passage"> passage</option>
              </select>
              <div>
                <input
                  placeholder="Nom de la rue"
                  className="border-2 w-full"
                  name="street"
                  {...register("street", { required: true })}
                />
              </div>
            </div>
            {errors.street && (
              <span className="w-full text-red-600 italic text-xs">
                Champs obligatoire
              </span>
            )}
          </div>

          <div className="flex flex-col">
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
          <div className="flex flex-row w-full place-content-evenly space-x-1">
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
              rows="15"
              className="border-2 h-full"
              {...register("Description", {
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
  );
}

export default AddAction;
