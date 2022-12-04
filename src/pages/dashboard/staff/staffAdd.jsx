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
import { staffSchema } from "@/utils/schemas";
import useBrand from "@/hooks/useBrands";
import useStaff from "@/hooks/useStaff";
const initialValues = {
  name: "",
  gender: "",
  phoneNumber: "",
  address: "",
  dob: "",
  branch: "",
  hometown: "",
  position: "",
  active: 0,
};
const validationShema = staffSchema;
function StaffAdd() {
  const nav = useNavigate();
  const { brands } = useBrand();
  const { positions, getStaff } = useStaff();
  const { addStaff } = useStaff();
  const handleSubmit = (valSubmit) => {
    const reContructVal = {
      name: valSubmit.name,
      gender: valSubmit.gender,
      phone_number: valSubmit.phoneNumber,
      address: valSubmit.address,
      hometown: valSubmit.hometown,
      branch_id: valSubmit.branch,
      position_id: valSubmit.position,
      dob: valSubmit.dob,
      active: valSubmit.active,
    };
    addStaff(reContructVal);
  };
  return (
    brands &&
    positions && (
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
                              name="gender"
                              component={SelectField}
                              label="Gender"
                              options={[
                                { id: 0, value: "Nam" },
                                { id: 1, value: "Nữ" },
                              ]}
                              defaultOp="Choose gender"
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
                              label="Home Town"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <Field
                                name="dob"
                                component={DatePickerField}
                                label="Day of birth"
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
                              options={brands.data.map((v) => ({
                                id: v.id,
                                value: v.name,
                              }))}
                              defaultOp="Choose branch"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <Field
                              name="position"
                              component={SelectField}
                              value="value"
                              label="Position"
                              options={positions.map((v) => ({
                                id: v.id,
                                value: v.name,
                              }))}
                              defaultOp="Choose position"
                            />
                          </FormGroup>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <Field
                              name="active"
                              component={SwitchField}
                              label="active"
                              // confirm={"Deactive this staff ?"}
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
                          onClick={() => nav("/dashboard/staff")}
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
      </div>
    )
  );
}

export default StaffAdd;
