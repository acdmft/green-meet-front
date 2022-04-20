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
    
    <div>
      <form
        className="flex flex-col mx-auto items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-rows-3 grid-flow-col gap-4 md:w-1/2 mb-12 space-x-8">
          
          <div className="flex flex-col">
            <label htmlFor="lastName">Lastname</label>
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
          <div className="flex flex-col">
            <label htmlFor="firstName">Firstname</label>
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
        <div className="flex flex-col pl-8">
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
        <Button type="submit">Soumettre</Button>
      </form>
    </div>
  );
}


export default ContactAdmin;
