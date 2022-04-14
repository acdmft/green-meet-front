import { React, useState } from "react";
import { useForm } from "react-hook-form";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true, maxLength: 150 })}
          type="text"
          name="email"
          id="email"
          placeholder="email"
          // value={localStorage.getItem("email")}
        />
        {/* Message d'erreur si input invalide : */}
        {errors.email && <span>Please enter a valid email</span>}
        <input
          {...register("password", { required: true, maxLength: 6 })}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {/* Message d'erreur si input invalide : */}
        {errors.password && <span>Please enter a valid password</span>}
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
