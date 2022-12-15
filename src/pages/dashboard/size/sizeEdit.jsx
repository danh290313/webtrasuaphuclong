import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link, useParams } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import { sizeSchema } from "@/utils/schemas";
import useSize from "@/hooks/useSize";
import { useEffect } from "react";
import { useState } from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import BackBtn from "@/components/BackBtn";
function SizeEdit() {
  const [size, setSize] = useState(null);
  let { id } = useParams();
  console.log("dah", id);
  id = +id;
  console.log("dahddd", id);
  const { getSize, editSize } = useSize();
  const initialValues = {
    id: id,
    name: size?.name,
    ratio: size?.ratio,

  };
  console.log(initialValues);
  useEffect(() => {
    (async () => {
      const res = await getSize(id);
      setSize(res?.size);
    })();
  }, []);
  const handleSubmit = (value) => {
    console.log({ value });
    editSize(id, value);
  };
  return (
    size && (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <BackBtn to={"/dashboard/size"} />
        <Card>
          <CardBody>
            <Formik
              initialValues={initialValues}
              validationSchema={sizeSchema}
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
                          <FastField
                            name="ratio"
                            component={InputField}
                            label="Ratio"
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
    )
  );
}

export default SizeEdit;
