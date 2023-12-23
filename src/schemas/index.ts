import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Provide valid email"),
  password: Yup.string().required("Password is required"),
});

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Provide valid email"),
  password: Yup.string().required("Password is required"),
});
