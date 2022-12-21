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
import { staffSchema } from "@/utils/schemas";
import useBranch from "@/hooks/useBranch";
import { forwardRef, useEffect, useState } from "react";
import useStaff from "@/hooks/useStaff";
import ConfirmDialog from "@/components/ConfirmDialog";
import BackBtn from "@/components/BackBtn";

function StaffEdit() {
  const nav = useNavigate();
  const { id } = useParams();
  const [staff, setStaff] = useState();
  const { getBranches } = useBranch();
  const [branch, setBranch] = useState();
  const [positions, setPositions] = useState();
  const { getPositions, getStaff, editStaff } = useStaff();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  console.log({ staff, branch, positions });
  useEffect(() => {
    // setStaff(getStaff(id));
    (async () => {
      const res = await getStaff(id);
      setStaff(res);
    })();
    (async () => {
      const res = await getPositions();
      setPositions(res.positions);
    })();
    (async () => {
      const res = await getBranches();
      setBranch(res);
    })();
  }, []);
  const initialValues = {
    ...staff?.staff_infomation,
    branch: staff?.staff_infomation?.branch?.id,
    position: staff?.staff_infomation?.position?.id,
  };
  const handleClose = () => setOpen(false);
  const handleSubmit = (valSubmit) => {
    const reContructVal = {
      name: valSubmit.name,
      gender: valSubmit.gender,
      phone_number: valSubmit.phoneNumber,
      address: valSubmit.address,
      hometown: valSubmit.hometown,
      branch_id: +valSubmit.branch,
      position_id: valSubmit.position,
      dob: valSubmit.dob,
      active: valSubmit.active,
    };
    console.log("test");
    setValue(reContructVal);
    if (initialValues.active != reContructVal.active) {
      setOpen(true);
    } else {
      editStaff(id, reContructVal);
      (async () => {
        const res = await getStaff(id);
        setStaff(res);
      })();
      nav("/dashboard/staff");
    }
  };
  const handleOK = () => {
    editStaff(id, value);
    (async () => {
      const res = await getStaff(id);
      setStaff(res);
    })();
    nav("/dashboard/staff");
  };

  return (
    staff &&
    branch &&
    positions && (
      <div className="mt-12  flex flex-col gap-4">
        <BackBtn to="/dashboard/staff" />
        <Card>
          <CardBody>
            <Formik
              initialValues={initialValues}
              validationSchema={staffSchema}
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
                              options={branch.data.map((v) => ({
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
                              confirm={"Deactive this staff ?"}
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
        <ConfirmDialog
          title={value?.active ? "Active this staff?" : "Unactive this staff"}
          handleClose={handleClose}
          open={open}
          handleOK={handleOK}
        />
      </div>
    )
  );
}

export default StaffEdit;
