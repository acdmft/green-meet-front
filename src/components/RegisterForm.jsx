import React from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
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
        <label htmlFor="confirmPassword">Confirm Password</label>

        <input
          type="password"
          name="confirmPassword"
          {...register("confirmPassword", { required: true, minLength: 6 })}
        />
        <label htmlFor="lastName">Lastname</label>
        <input name="lastName" {...register("lastName", { required: true })} />
        <label htmlFor="firstName">Firstname</label>
        <input
          name="firstName"
          {...register("firstName", { required: true })}
        />
        <label htmlFor="city">City</label>
        <input name="city" {...register("city", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegisterForm;
