import { React, useState, useContext } from "react";
import { useForm } from "react-hook-form";
// Components
import Button from "./Button";
// Context
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
//toastify
import { toast } from "react-toastify";

function LoginForm() {
  // context
  const context = useContext(AuthContext);
  // navigation
  const navigate = useNavigate();
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // send login form data to the backend ("/login" route)
  const onSubmit = (data) => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          toast.success("Tu es connecté!");
          context.setIsAuthenticated(true);
          navigate("/");
        } else {
          toast.error("Identifiant ou mot de passe incorrect");
        }
      })
      .catch((err) =>
        toast.error("Quelque chose s'est mal passé, réessayez plus tard!")
      );
  };
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
        className="flex flex-col w-3/4 sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/2 mx-auto items-center h-1/2 space-y-11 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row md:space-x-11 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 pl-2 rounded"
              {...register("email", {
                required: true,
                maxLength: 150,
                // minLength: 6,
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
              })}
              type="text"
              name="email"
              id="email"
              placeholder="exemple@exemple.com"
              // value={localStorage.getItem("email")}
            />
            {/* Message d'erreur si input invalide : */}
            {errors.email && (
              <span className="text-red-600 italic text-xs">
                Entrez un mail valide
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Mot de passe</label>
            <input
              className="border-2 pl-2 rounded"
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
            />
            {/* Message d'erreur si input invalide : */}
            {errors.password && (
              <span className="text-red-600 italic text-xs">
                Please enter a valid password
              </span>
            )}
          </div>
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
        <div>
          <Button type="submit">Se connecter</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
