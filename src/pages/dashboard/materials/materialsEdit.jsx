import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid, Input } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link, useParams } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import { materialSchema } from "@/utils/schemas";
import { useState } from "react";
import { useEffect } from "react";
import useMaterial from "@/hooks/useMaterial";
export function MaterialEdit() {
  const { getMaterial, editMaterial } = useMaterial();
  let { id } = useParams();
  id=+id;
  
  const [material, setMaterial] = useState(null);
  
  const initialValues = {
    id: id,
    name: material?.data.name,
    uom: material?.data.uom,
  };
 
  useEffect(() => {
    (async () => {
      const res = await getMaterial(id);
      console.log(res);
      setMaterial(res);
    })();
  }, []);
  const handleSubmit = (value) => {
    console.log(value);
    editMaterial(id, value);
  };
  return (
    material && (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardBody>
            <Formik
              initialValues={initialValues}
              validationSchema={materialSchema}
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
                            name="uom"
                            component={InputField}
                            label="Uom"
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

export default MaterialEdit;
