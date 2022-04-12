import React from "react";

import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Titre</label>
        <input
          name="title"
          {...register("title", {
            required: true,
            maxLength: 50,
          })}
        />
        <label htmlFor="message">Message</label>

        <input
          type="text"
          name="message"
          {...register("message", {
            required: true,
            minLength: 10,
            maxLength: 500,
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ContactForm;
