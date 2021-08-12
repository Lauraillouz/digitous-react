import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const Login = () => {
  const isLoggedState = useContext(UserContext);

  //const [userInfo, setUserInfo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isChecked) {
      localStorage.setItem("username", data.username);
    }
    isLoggedState.setAuth();
  };

  const check = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <div className="bg-dark">
      <h2 className="p-3 text-light">Login</h2>
      <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-3"
          {...register("username", { required: true }, { maxLength: 15 })}
          type="text"
          value={username ? username : null}
        />
        {errors.username && <p className="text-light">Username is required.</p>}
        <input
          className="form-control mb-3"
          {...register(
            "password",
            { required: true },
            { minLength: 6 },
            { maxLength: 15 }
          )}
          type="password"
        />
        {errors.password && <p className="text-light">Password is required.</p>}
        <div>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            onClick={check}
          />
          <label className="text-white ms-2 mb-3" htmlFor="remember">
            Remember me
          </label>
        </div>

        <input
          type="submit"
          className="btn btn-info"
          value={isLoggedState.isLogged ? "Log out" : "Log in"}
        />
      </form>
    </div>
  );
};

export default Login;
