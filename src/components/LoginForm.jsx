import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: true,
            maxLength: 150,
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
          })}
        />
        <input {...register("lastName", { required: true, minLength: 6 })} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
