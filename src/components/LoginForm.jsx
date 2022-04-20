import { React, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // Si la checkbox est activée, on garde le email dans le local storage :
  // if (rememberMe === true) {
  //   localStorage.setItem("email", data.email);
  // }

  // State remember pour rappel email et password utilisateur
  const [rememberMe, setRememberMe] = useState(false);

  // Fonction pour changement state remember :
  const handleChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div>
      <form
        className="flex flex-col w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto items-center h-1/2 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            className="border-2"
            {...register("email", {
              required: true,
              maxLength: 150,
              minLength: 6,
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
            })}
            type="text"
            name="email"
            id="email"
            placeholder="email"
          // value={localStorage.getItem("email")}
          />
          {/* Message d'erreur si input invalide : */}
          {errors.email && (
            <span className="w-full text-red-600 italic text-xs">
              Please enter a valid email
            </span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            className="border-2"
            {...register("password", { required: true })}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          {/* Message d'erreur si input invalide : */}
          {errors.password && (
            <span className="w-full text-red-600 italic text-xs">
              Please enter a valid password
            </span>
          )}
        </div>

        {/* <div className="container">
          <input
            {...register("checkbox")}
            type="checkbox"
            name="remember"
            value="remember"
            onChange={handleChange}
          />
          <label for="remember" style={{ color: "white" }}>
            Remember me
          </label>
        </div> */}

        <Button type="submit" className="w-full mt-6">
          Se connecter
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
