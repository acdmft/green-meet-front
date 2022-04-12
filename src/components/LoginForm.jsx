import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          {...register("email", {
            required: true,
            maxLength: 150,
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
          })}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
