import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
const data = {
  img: "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png",
  name: "tra sua phuc long",
  topping: [
    { id: 1, name: "tra" },
    { id: 2, name: "da" },
  ],
};
const validationShema = Yup.object().shape({
  phoneNumber: Yup.number().required("This field is required"),
  fullname: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("This field is required"),
  sex: Yup.string().required("This field is required"),
  "identity-card-number": Yup.string().matches(/^[0-9]+$/, "Number only"),
  birthday: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Email must included '@'")
    .required("This field is required"),

  address: Yup.string().required("This field is required"),
  hometown: Yup.string().required("This field is required"),
});
function DrinksRecipesTopping() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardBody>
          <div>
            <img src="" alt="" className="" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default DrinksRecipesTopping;
