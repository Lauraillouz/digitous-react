import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} type="text" required maxLength={15} />
        {errors.username && <span>Username is required</span>}
        <input
          {...register("password")}
          type="password"
          required
          maxLength={6}
        />
        {errors.password && <span>Password is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
