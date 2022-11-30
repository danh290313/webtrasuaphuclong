import * as Yup from "yup";

const phoneNumber = Yup.string()
  .matches(/^[0-9]+$/, "Number only")
  .min(10, "Phone must be 10 characters")
  .max(10, "Phone must be 10 characters");
const fullname = Yup.string()
  .min(2, "Name must be at least 2 characters")
  .required("This field is required");
const sex = Yup.string().required("This field is required");
const identityCardNumber = Yup.string().matches(/^[0-9]+$/, "Number only");
const birthday = Yup.string().required("This field is required");
const email = Yup.string()
  .email("Email must included '@'")
  .required("This field is required");
const address = Yup.string().required("This field is required");
const hometown = Yup.string().required("This field is required");
const date_opend = Yup.string().required("This field is required");
const description = Yup.string().min(
  15,
  "Description must be at least 15 characters"
);
const price = Yup.string()
  .required("This field is required")
  .matches(/^[0-9]+$/, "Number only");
const discount = Yup.string().matches(/^[0-9]+$/, "Number only");
const sale_on_days = Yup.string().matches(/^[0-9]+$/, "Number only");
const image = Yup.string().required("This field is required");
const active = Yup.boolean();
const type = Yup.string().required("This field is required");
const dob = Yup.string().required("This field is required");
const gender = Yup.string().required("This field is required");
export const staffSchema = Yup.object().shape({
  phoneNumber,
  fullname,
  sex,
  "identity-card-number": identityCardNumber,
  birthday,
  email,
  address,
  hometown,
});
export const warehousesSchema = Yup.object().shape({
  phoneNumber,
  name: fullname,
  address,
  date_opend,
});
export const drinksSchema = Yup.object().shape({
  name: fullname,
  description,
  price,
  discount,
  sale_on_days,
  image,
  active,
  type,
});
export const customerSchema = Yup.object().shape({
  phone: phoneNumber,
  name: fullname,
  gender,
  dob,
  active,
});
