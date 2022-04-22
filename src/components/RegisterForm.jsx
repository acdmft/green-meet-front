import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
// Context
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
// toastify
import { toast } from "react-toastify";

function RegisterForm(props) {
  // context
  const context = useContext(AuthContext);
  // navigation
  const navigate = useNavigate();
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  // watch password and confirm password fields 
  const watchPassword = watch("password", props.password);
  const watchConfirmPassword = watch("confirmPassword", props.confirmPassword);

  const onSubmit = (data) => {
    // remove confirmPassword key, value form request to pass validation
    delete data.confirmPassword;
    // convert city input into string with "-" instead of " "
    data.city = data.city.split(/[\s-]+/).reduce((prev, curr)=> `${prev.toLowerCase()}-${curr.toLowerCase()}`);
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        if (data.status === 201) {
          toast.success("Le nouveau compte est créé !");
          context.setIsAuthenticated(true);
          return navigate("/");
        } else {
          return toast.error("L'email existe déjà");
        }
      })
      .catch((err) =>
        toast.error("Quelque chose s'est mal passé, réessayez plus tard!")
      );
  };

  return (
    <div>
      <form
        className="flex flex-col mx-auto items-center my-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col lg:grid md:grid-rows-3 lg:grid-flow-col lg:gap-4 md:w-2/3 mb-12 ">
          
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="email">Email</label>
            <input 
              name="email"
              type="email"
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
          {/* **** PASSWORD INPUT *****/}
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="password">Mot de passe</label>
            <input
              className="border-2 rounded"
              type="password"
              name="password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span className="w-full text-red-600 italic text-xs">
                Entrez un mot de passe valide
              </span>
            )}
          </div>
          {/* **** CONFIRM PASSWORD INPUT *****/}
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="confirmPassword">Confirmez votre mot de passe</label>
            <input
              className="border-2 rounded"
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span className="w-full text-red-600 italic text-xs">
                Le mot de passe ne correspond pas
              </span>
            )}
            {watchConfirmPassword != watchPassword && (
              <p> Le mot de passe et la confirmation ne correspondent pas!</p>
            )}
          </div>
          <div className="flex flex-col w-auto">
            <label className="font-bold" htmlFor="lastName">Nom</label>
            <input
              className="border-2 rounded"
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
            <label className="font-bold" htmlFor="firstName">Prénom</label>
            <input 
              className="border-2 rounded"
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
            <label className="font-bold" htmlFor="city">Ville</label>
            <input
              className="border-2 rounded"
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
