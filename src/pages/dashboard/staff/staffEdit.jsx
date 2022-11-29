import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
const options = [
  { id: "1", value: "Male" },
  { id: "2", value: "Female" },
];
const initialValues = {
  fullname: "tu",
  sex: "",
  phoneNumber: "022222222",
  "identity-card-number": "",
  address: "",
  birthday: "",
  email: "",
  hometown: "",
  active: "",
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
function StaffEdit() {
  const handleSubmit = (value) => {
    // console.log(value);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardBody>
          <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={handleSubmit}
            validateOnBlur={true}
          >
            {(props) => {
              return (
                <>
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <FastField
                            name="fullname"
                            component={InputField}
                            label="Full name"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="phoneNumber"
                            component={InputField}
                            label="Phone"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="sex"
                            component={SelectField}
                            value="value"
                            label="Gender"
                            options={options}
                            defaultOp="Choose gender"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="identity-card-number"
                            component={InputField}
                            label="CMND/CCCD"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Field
                              name="birthday"
                              component={DatePickerField}
                              label="Day of birth"
                              inputFormat="DD/MM/YYYY"
                            />
                          </LocalizationProvider>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="email"
                            component={InputField}
                            label="Email"
                          />
                        </FormGroup>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="address"
                            component={InputField}
                            label="Address"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="hometown"
                            component={InputField}
                            label="Hometown"
                          />
                        </FormGroup>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="active"
                            component={SwitchField}
                            label="active"
                            confirm={"Deactive this staff ?"}
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                    <Button
                      variant={"gradient"}
                      type="submit"
                      color={"blue"}
                      className="mt-4 flex items-center py-1 px-6 capitalize"
                    >
                      <Typography
                        color="inherit"
                        className=" font-medium capitalize"
                      >
                        Save
                      </Typography>
                    </Button>
                  </Form>
                </>
              );
            }}
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
}

export default StaffEdit;
