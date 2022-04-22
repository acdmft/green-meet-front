import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
// toastify 
import { toast } from "react-toastify";
// navigation 
import { useNavigate } from "react-router-dom";


function ContactAdmin() {
  // navigation 
  const navigate = useNavigate();
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("/contact",{
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
    .then((data) => {
      if (data.status === 201) {
        toast.success("Le message est envoyé !");
        return navigate("/");
      } else {
        return toast.error("Quelque chose s'est mal passé, réessayez plus tard!");
      }
    })
    .catch((err) =>
      toast.error("Quelque chose s'est mal passé, réessayez plus tard!")
    )
  };

  return (
    <div className="contactPage">
      <div className="pt-24">
        <h1 className="text-center text-lg md:text-xl lg:text-3xl">
          Contacter l'administrateur du site
        </h1>
        </div>
    
    <div id="contenu">
      <form
        className="flex flex-col mx-auto items-center pt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-rows-3 grid-flow-col space-x-8">
          <div className="flex flex-col mx-8 w-60 md:w-96">
            <label className="font-bold" htmlFor="lastName">Nom</label>
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
            <label className="font-bold" htmlFor="firstName">Prénom</label>
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
          <div className="flex flex-col w-60 md:w-96">
            <label className="font-bold" htmlFor="email">Email</label>
            <input
              name="email"
              className="border-2 rounded"
              {...register("email", {
                required: true,
                maxLength: 100,
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
              })}
            />
            {errors.email && (
              <span className="w-full text-red-600 italic text-xs">
                Please enter a valid email
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col w-60 md:w-96">
          <label className="font-bold" htmlFor="description">Commentaire</label>
          <textarea
            rows="15"
            className="border-2 h-full"
            {...register("text", {
              required: true,
              max: 200,
              min: 50,
              maxLength: 500,
              minLength: 20,
            })}
          />

          {errors.text && (
            <span className="w-full text-red-600 italic text-xs">
              Veuillez indiquer votre message
            </span>
          )}
        </div>
        <div className="my-5">
          <Button type="submit">Soumettre</Button>
        </div>
      </form>
    </div>
    </div>
  
    
  );
}

export default ContactAdmin;
