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
          {...register("username")}
          type="text"
          required
          maxLength={15}
        />
        {errors.username && <span>Username is required</span>}
        <input
          className="form-control mb-3"
          {...register("password")}
          type="password"
          required
          maxLength={6}
        />
        {errors.password && <span>Password is required</span>}
        <input className="form-control bg-info" type="submit" />
      </form>
    </div>
  );
};

export default Login;
