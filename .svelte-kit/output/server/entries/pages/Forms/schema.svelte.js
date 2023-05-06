import { c as create_ssr_component } from "../../../chunks/index-584434b3.js";
import * as yup from "yup";
const Schema = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let values = {
    email: "",
    password: "",
    confirmPassword: "",
    hobby: "",
    checkbox: false
  };
  const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Please confirm your password").oneOf([yup.ref("password"), null], "Passwords do not match"),
    hobby: yup.string().required("Hobby is required"),
    checkbox: yup.bool().required("Checkbox must be accepted").oneOf([true], "Checkbox must be accepted")
  });
  schema.validate(values, { abortEarly: false }).then(() => {
    alert(JSON.stringify(values, null, 2));
  }).catch((err) => {
    console.log(err.errors);
  });
  return ``;
});
export { Schema as default };
