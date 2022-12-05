import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid, Input } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link, useNavigate,useParams } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import { ProviderSchema } from "@/utils/schemas";
import useProvider from "@/hooks/useProvider";
import BackBtn from "@/components/BackBtn";
import { useState,useEffect } from "react";

const initialValues = {
  name: "",
  address: "",
  phoneNumber: "",
};

function ProviderAdd() {
  const [provider, setProvider] = useState(null);
  const {} = useProvider();

  let { id } = useParams();
  id = +id;
  const { getProvider, editProvider } = useProvider();
  const initialValues = {
    id: id,
    name: provider?.name,
    address: provider?.address,
    phoneNumber: provider?.phoneNumber, 
    dateOpened: provider?.dateOpened,
    active: provider?.active,
  };
  console.log({ initialValues });
  useEffect(() => {
    (async () => {
      const res = await getProvider(id);
      // console.log({ res });
      setProvider(res?.data?.data);
    })();
  }, []);
  const handleSubmit = (value) => {
    console.log({ value });
    editProvider(id, value);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <BackBtn to="/dashboard/provider" />
      <Card>
        <CardBody>
          <Formik
            initialValues={initialValues}
            validationSchema={ProviderSchema}
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
                            name="address"
                            component={InputField}
                            label="Address"
                          />
                        </FormGroup>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="phoneNumber"
                            component={InputField}
                            label="Phone Number"
                          />
                        </FormGroup>
                      </Grid>

                      
                    </Grid>

                    <Button
                      variant={"gradient"}
                      type="submit"
                      color={"red"}
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

export default ProviderAdd;
