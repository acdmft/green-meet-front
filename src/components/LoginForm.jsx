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
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-2/3 sm:1/2 md:w-1/3 mx-auto items-center h-1/2 space-y-6"
      >
        <input
          className="w-full border border-2 h-8"
          {...register("email", {
            required: true,
            maxLength: 150,
            minLength: 5,
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
        <input
          className="w-full border border-2 h-8"
          {...register("password", { required: true, maxLength: 6 })}
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
