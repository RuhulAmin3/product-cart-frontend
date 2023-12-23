import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUserRegisterMutation } from "../../redux/features/auth/auth.api";
import useToastAndApiHandler from "../../hooks/useToastAndApiHandler";
import { GenericResponseType, IGenericErrorResponse, IUser } from "../../types";
import { useEffect } from "react";

const Register = () => {
  const [userRegistration, { isSuccess, isLoading, isError, data, error }] =
    useUserRegisterMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      userRegistration(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/products");
    }
  }, [isSuccess]);

  const { errors, values, touched, handleChange, handleSubmit } = formik;
  const successMessage = "register successful";
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
      <h2 className="text-xl text-white mb-4">Register</h2>
      <p className="text-primary_text text-sm">
        Already have an account?{" "}
        <Link className="text-primary cursor-pointer font-[500]" to={"/"}>
          Login
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
        <div>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className={`input ${
              errors.firstName && touched.firstName && "input-error"
            }`}
            onChange={handleChange}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName ? (
            <p className="text-red-400 text-sm">{errors.firstName}</p>
          ) : null}
        </div>
        <div>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className={`input ${
              errors.lastName && touched.lastName && "input-error"
            }`}
            onChange={handleChange}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName ? (
            <p className="text-red-400 text-sm">{errors.lastName}</p>
          ) : null}
        </div>
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
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </>
  );
};

export default Register;
