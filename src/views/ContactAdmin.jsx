import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

function ContactAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="contactPage">
    <div id="contenu">
      <form
        className="flex flex-col mx-auto items-center pt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-rows-3 grid-flow-col space-x-8">
          <div className="flex flex-col mx-8 w-60 md:w-96">
            <label htmlFor="lastName">Nom</label>
            <input
              className="border-2"
              name="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="w-full text-red-600 italic text-xs">
                Champs obligatoire
              </span>
            )}
          </div>
          <div className="flex flex-col w-60 md:w-96">
            <label htmlFor="firstName">Prénom</label>
            <input
              className="border-2"
              name="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="w-full text-red-600 italic text-xs">
                Champs obligatoire
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col w-60 md:w-96">
          <label htmlFor="description">Commentaire</label>
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
              Veuillez indiquer votre message
            </span>
          )}
        </div>
        <div className="mt-10 mb-10">
          <Button type="submit">Soumettre</Button>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default ContactAdmin;
