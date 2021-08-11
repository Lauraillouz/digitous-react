import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-dark">
      <h2 className="p-3 text-light">Login</h2>
      <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-3"
          {...register("username", { required: true }, { maxLength: 15 })}
          type="text"
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
        <input className="form-control bg-info" type="submit" />
      </form>
    </div>
  );
};

export default Login;
