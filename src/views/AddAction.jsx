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
        <div className=" gap-4 md:w-1/2 mb-12 space-x-8">
          <div className="flex flex-col pl-8">
            <label htmlFor="title">Titre</label>
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

          <div className="flex flex-col pl-8">
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
