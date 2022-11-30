import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid, Input } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
const initialValues = [
  {
    id: "123",
    name: "chi nhanh da nang",
    address: "",
    phone_number: "0922222222",
    date_opened: "11/11/1111",
    active: "true",
  },
];

const validationShema = Yup.object().shape({
  phone_number: Yup.string().min(10, "Name must be at least 10 characters"),
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("This field is required"),
  address: Yup.string().required("This field is required"),
  date_opend: Yup.string().required("This field is required"),
});

export function WarehousesEdit() {
  const handleSubmit = (value) => {
    console.log(value);
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
            //do somthing here
            // console.log(props);
            return (
              <>
                <Form>
                  <Grid container spacing={2}>
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
                          name="address"
                          component={InputField}
                          label="Address"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="phone_number"
                          component={InputField}
                          label="Phone"
                        />
                      </FormGroup>
                    </Grid>
                   
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Field
                            name="date_opened"
                            component={DatePickerField}
                            label="Date Opened"
                            inputFormat="DD/MM/YYYY"
                          />
                        </LocalizationProvider>
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

export default WarehousesEdit;
