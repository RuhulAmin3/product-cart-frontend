import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../redux/features/auth/auth.api";
import useToastAndApiHandler from "../../hooks/useToastAndApiHandler";
import { GenericResponseType, IGenericErrorResponse, IUser } from "../../types";
import { useEffect } from "react";
const Login = () => {
  const [userLogin, { data, isError, isLoading, isSuccess, error }] =
    useUserLoginMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      userLogin(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/products");
    }
  }, [isSuccess]);

  const { errors, values, touched, handleChange, handleSubmit } = formik;
  const successMessage = "login successful";

  useToastAndApiHandler<GenericResponseType<IUser>, IGenericErrorResponse>(
    {
      isSuccess,
      isError,
      isLoading,
      data,
      error,
    },
    successMessage
  );

  return (
    <>
      <h2 className="text-xl text-white mb-4">Login</h2>
      <p className="text-primary_text text-sm">
        Don’t have an account?{" "}
        <Link
          to={"/register"}
          className="text-primary cursor-pointer font-[500]"
        >
          Register
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email address"
            className={`input ${
              errors.email && touched.email && "input-error"
            }`}
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <p className="text-red-400 text-sm">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <input
            name="password"
            type="password"
            className={`input ${
              errors.password && touched.password && "input-error"
            }`}
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && touched.password ? (
            <p className="text-red-400 text-sm"> {errors.password}</p>
          ) : null}
        </div>
        <span
          className="forgot-password"
          onClick={() => toast.error("Forgot Password is not available")}
        >
          Forgot password?
        </span>
        <button type="submit" className="login-btn">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </>
  );
};

export default Login;
