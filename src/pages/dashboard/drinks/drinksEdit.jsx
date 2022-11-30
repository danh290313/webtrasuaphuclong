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
import UploadAndDisplayImage from "@/components/Upload";
const options = [
  { id: "1", value: "Trà sữa" },
  { id: "2", value: "Cà phê" },
  { id: "2", value: "Nước ép" },
];
const initialValues = {
  id: "123",
  name: "do uong",
  description: "des",
  price: "40000",
  discount: "45",
  sale_on_days: "",
  image: "",
  active: true,
  type: "2",
};
const validationShema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name must be at least 5 characters")
    .required("This field is required"),
  description: Yup.string().min(5, "Name must be at least 10 characters"),
  "identity-card-number": Yup.string().matches(/^[0-9]+$/, "Number only"),
  price: Yup.string()
    .required("This field is required")
    .matches(/^[0-9]+$/, "Number only"),
  discount: Yup.string().matches(/^[0-9]+$/, "Number only"),
  sale_on_days: Yup.string(),
  image: Yup.string().required("This field is required"),
  active: Yup.boolean(),
  type: Yup.string().required("This field is required"),
});
function DrinksEdit() {
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
                    <Grid container  justifyContent="center" >
                        <FormGroup>
                          <Field
                            name="image"
                            component={UploadAndDisplayImage}
                            label="Image"
                          />
                        </FormGroup>
                      </Grid> 
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <FastField
                            name="name"
                            component={InputField}
                            label="Name"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="description"
                            component={InputField}
                            label="Description"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="discount"
                            component={InputField}
                            label="Discount"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="sale_on_days"
                            component={DatePickerField}
                            label="Sale on day"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Field
                              name="image"
                              component={InputField}
                              label="Image"
                            />
                          </LocalizationProvider>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="type"
                            component={SelectField}
                            label="Type"
                            options={options}
                            defaultOp="Choose drink's type"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="active"
                            component={SwitchField}
                            label="active"
                            confirm={"Deactive this drink ?"}
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

export default DrinksEdit;
