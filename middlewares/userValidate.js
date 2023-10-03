import * as yup from "yup";

const userValidate = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password field cannot be empty")
      .min(6, "Password must be at least 6 characters")
      .max(8, "Password must not be more than 8 characters"),
    c_password: yup
      .string()
      .required("Confirm password field cannot be empty")
      .oneOf([yup.ref("password"), null], "Your password does not match"),
    firstName: yup
      .string("First name must be a string")
      .min(2, "First name is too short")
      .max(20, "First name is too long")
      .required("Firstname is required")
      .matches(/^[a-zA-Z]+$/, "First name must only contain letters"),
    lastName: yup
      .string("Last name must be a string")
      .min(2, "Last name is too short")
      .max(20, "Last name is too long")
      .required("Lastname is required")
      .matches(/^[a-zA-Z]+$/, "Last name must only contain letters"),
  })

  const userLoginValidate = yup.object({

    email: yup
    .string("Email must be valid")
    .email("Email is required")
    .required("Email is required"),

    password : yup
    .string("First name must be a string")
    .min(8,"Password is too short")
    .max(20, "Password is too long")
    .required("Password is required")
    .matches(/^[a-zA-Z0-9]+$/, "First name must contain letters and numbers"),
   
})


export {userValidate,userLoginValidate}