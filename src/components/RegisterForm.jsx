import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
// Context 
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  // context 
  const context = useContext(AuthContext);
  // navigation 
  const navigate = useNavigate();
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    // remove confirmPassword key, value form request to pass validation 
    delete data.confirmPassword;
    fetch("/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)

    })
    .then((data) => {
      if (data.status === 201) {
        context.setIsAuthenticated(true);
        navigate("/"); 
      }
    })
    .catch((err)=> console.log(err));
  }

  return (
    <div>
      <form
        className="flex flex-col mx-auto items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-rows-3 grid-flow-col gap-4 md:w-1/2 mb-12 space-x-8">
          <div className="flex flex-col pl-8">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="border-2"
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
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border-2"
              type="password"
              name="password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span className="w-full text-red-600 italic text-xs">
                Please enter a valid password
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="border-2"
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span className="w-full text-red-600 italic text-xs">
                Le mot de passe ne correspond pas
              </span>
            )}
          </div>
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
          <div className="flex flex-col">
            <label htmlFor="city">City</label>
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
        </div>
        <Button type="submit">S'enregistrer</Button>
      </form>
    </div>
  );
}

export default RegisterForm;
