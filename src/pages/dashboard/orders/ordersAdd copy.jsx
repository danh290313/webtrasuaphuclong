import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid, Input } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { useNavigate } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
const listStaff = [
  { id: "1", value: "Male" },
  { id: "2", value: "Female" },
];

const listShipping =[
  {id: "1", value: "Delivery"},
  {id: "2", value: "Delived"},
  {id: "3", value: "Not delivery"},
];
const listAddress =[
  {id: "1", value: "Giam doc"},
  {id: "2", value: "Quan Ly"},
  {id: "3", value: "Nhan Vien phuc vu"},
];
const listBranch =[
  {id: "1", value: "Vung tau"},
  {id: "2", value: "Ho chi minh"},
  {id: "3", value: "Nha Trang"},
];

const initialValues = {
    id: "123",
    created_at: "11/11/1111",
    paid: "True",
    note: "description",
    status : { id: 18, value: "shipping" }
  
};
const validationShema = Yup.object().shape({
  note: Yup.string().min(10, "Name must be at least 10 characters"),
  status: Yup.string().required("This field is required"),
  paid: Yup.string().required("This field is required"),
  created_at: Yup.string().required("This field is required"),

});
function OrdersAdd() {
  const handleSubmit = (value) => {
      console.log(value);
  };
  const nav = useNavigate();
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
                            name="id"
                            component={InputField}
                            label="Id"
                            disabled
                          />
                        </FormGroup>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="status"
                            component={SelectField}
                            value="value"
                            label="Status"
                            options={listShipping}
                            defaultOp="Choose Status"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="note"
                            component={InputField}
                            label="Note"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Field
                              name="created_at"
                              component={DatePickerField}
                              label="Day is Created"
                              inputFormat="DD/MM/YYYY"
                            />
                          </LocalizationProvider>
                        </FormGroup>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="branch"
                            component={SelectField}
                            value="value"
                            label="Branch"
                            options={listBranch}
                            defaultOp="Choose branch"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="address"
                            component={SelectField}
                            value="value"
                            label="Address"
                            options={listAddress}
                            defaultOp="Choose Address"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="active"
                            component={SwitchField}
                            label="Paied"
                            confirm={"The buyer has paid bill ?"}
                          />
                        </FormGroup>
                      </Grid>

                    </Grid>
                    <div className="flex">
                        <Button
                          variant={"gradient"}
                          color={"blue"}
                          className="mt-4 mr-6 flex items-center py-1 px-6 capitalize"
                          type="button"
                          onClick={() => nav("/dashboard/orders")}
                        >
                          <Typography
                            color="inherit"
                            className=" font-medium capitalize"
                          >
                            Back
                          </Typography>
                        </Button>
                        <Button
                          variant={"gradient"}
                          color={"red"}
                          className="mt-4 flex items-center py-1 px-6 capitalize"
                          type="submit"
                        >
                          <Typography
                            color="inherit"
                            className=" font-medium capitalize"
                          >
                            Save
                          </Typography>
                        </Button>
                      </div>
                  </Form>
                </>
              );
            }}
          </Formik>
        </CardBody>
      </Card>

      <Card className="bg-green-50">
            <CardBody>
              <Typography varient="h2" className="font-bold">
                ITEMS
              </Typography>
             
            </CardBody>
          </Card>
    </div>
  );
}

export default OrdersAdd;
