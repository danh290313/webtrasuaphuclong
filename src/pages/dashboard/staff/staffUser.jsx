import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  FormGroup,
  Grid,
  Slide,
} from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import { useNavigate, useParams } from "react-router-dom";
import { forwardRef, useEffect, useState } from "react";
import { confirmPasswordSchema } from "@/utils/schemas";
import ConfirmDialog from "@/components/ConfirmDialog";
import useStaff from "@/hooks/useStaff";

import useRole from "@/hooks/useRole";
import useUser from "@/hooks/useUser";


function StaffUser() {
  const nav = useNavigate();
  let { id } = useParams();
  id =+id;

  const [User, setUser] = useState();
  const { getRoles } = useRole();
  const [role, setRole] = useState();
  const { addUser, editUser } = useUser();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();


  const [staff, setStaff] = useState();
  const {  getStaff, editStaff } = useStaff();
 
  const handleClose = () => setOpen(false);
  
  const handleOK = () => {
    editUser(value);
    nav("/dashboard/staff");
  };

  useEffect(() => {
    (async () => {
      const res = await getRoles();
      setRole(res?.data);
    })();
  }, []);

  useEffect(() => {
    // setUser(getUser(id));
    (async () => {
      const res = await getStaff(id);
      setStaff(res?.staff_infomation    );
    })();
  }, []);

  const handleSubmit = (valSubmit) => {
    const reContructVal = {
      email: valSubmit.email,
      password: valSubmit.password,
      password_confirmation: valSubmit.confirmpassword,
      role_id: valSubmit.role,
      staff_id: id
    };

    addUser(reContructVal);
    console.log("da", reContructVal);
   
    
  };


  return (
    staff &&
    role &&
     (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardBody>
            <Formik
              initialValues={staff}
              validationSchema={confirmPasswordSchema}
              onSubmit={handleSubmit}
              validateOnBlur={true}
            >
              {(props) => {
                return (
                  <>

                    <Form>
                      <Grid container spacing={2} >
                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <FastField
                              name="name"
                              component={InputField}
                              label="Full name"
                              disabled
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <Field
                              name="phoneNumber"
                              component={InputField}
                              label="Phone"
                              disabled
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                        
                    </Form>

                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <FastField
                              name="email"
                              component={InputField}
                              label="Email"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <Field
                              name="password"
                              
                              component={InputField}
                              type="password"
                              label="Password"
                            />
                            <Field
                              name="confirmpassword"
                              
                              component={InputField}
                              type="password"
                              label="confirmpassword"
                            />
                          </FormGroup>
                        </Grid>
                     

                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <Field
                              name="role"
                              component={SelectField}
                              value="value"
                              label="role"
                              options={role.map((v) => ({
                                id: v.id,
                                value: v.name,
                              }))}
                              defaultOp="Choose role"
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

export default StaffUser;
