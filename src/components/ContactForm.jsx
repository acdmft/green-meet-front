import React from "react";

import ArrowButton from "./Button";

import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mt-6">
      {/* FORM */}
      <form
        className="flex flex-col sm:mx-10 items-center mx-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Titre */}
        <div className="w-full gap-4 lg:w-1/2 mb-10 space-y-5">
          <div className="flex flex-col relative font-bold">
            <label htmlFor="title">Objet de votre message</label>
            <input
              name="title"
              className="border-2"
              {...register("title", {
                required: true,
                maxLength: 20,
                minLength: 1,
              })}
            />
            {errors.title && (
              <span className="w-full text-red-600 text-xs absolute top-14">
                Merci d'indiquer l'objet de votre message'
              </span>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col relative font-bold">
            <label htmlFor="description">Description</label>
            <textarea
              rows="12"
              className="border-2 h-full"
              {...register("description", {
                required: true,
                max: 200,
                min: 5,
                maxLength: 500,
                minLength: 5,
              })}
            />

            {errors.description && (
              <span className="w-full text-red-600 italic text-xs absolute top-80">
                Merci d'indiquer un message complet
              </span>
            )}
          </div>
        </div>
        <ArrowButton type="submit">Envoyer le message</ArrowButton>
      </form>
    </div>
  );
}

export default ContactForm;
