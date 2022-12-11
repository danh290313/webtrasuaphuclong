import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { Autocomplete, FormGroup, Grid, TextField } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import TransferList from "@/components/mui/TransferList";
import { materials } from "@/constant/recipes";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMaterial from "@/hooks/useMaterial";
import useDrink from "@/hooks/useDrink";
function DrinksRecipesTopping() {
  let { id } = useParams();
  id = +id;
  const [matsChoosed, setMatsChoosed] = useState([]);
  const [initVals, setInitVals] = useState({});
  const [schema, setChema] = useState(null);
  const [mats, setMats] = useState();
  const nav = useNavigate();
  const { getAllMaterial } = useMaterial();
  const [drink, setDrink] = useState();
  const { getDrink } = useDrink();
  const handleOnChangeMat = (e, mats) => {
    setInitVals(() => {
      const init = {};
      mats.forEach((m) => {
        init[m.id] = "";
      });
      return init;
    });
    setMatsChoosed(mats);
    setChema(() => {
      const sche = {};
      mats.forEach((mat) => {
        sche[mat.id] = Yup.string()
          .matches(/^[0-9]+$/, "Number only")
          .required("This filed is required");
      });
      return sche;
    });
  };
  // console.log({ matsChoosed });
  // const handleOnchangeMatValue = (e) => {
  //   const i = +e.target.dataset.id;
  //   setMatsChoosed((prev) => {
  //     prev[i].value = e.target.value;
  //     console.log(prev);
  //     return prev;
  //   });
  // };
  const handleSubmit = (val) => {
    Object.keys(val).forEach((k) => val[k] === "" && delete val[k]);
    console.log({ val });
  };
  useEffect(() => {
    (async () => {
      const res = await getAllMaterial();
      setMats(res.data);
    })();
    (async () => {
      const res = await getDrink(id);
      setDrink(res?.drinkInfo);
      setMatsChoosed(res?.drinkInfo?.recipes);
    })();
  }, []);
  console.log({ drink, matsChoosed });
  return (
    mats && (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardBody>
            <div>
              <label htmlFor="materials">Materials</label>
              <Autocomplete
                multiple
                id="materials"
                options={mats}
                getOptionLabel={(option) => option.name}
                defaultValue={matsChoosed}
                filterSelectedOptions
                onChange={handleOnChangeMat}
                renderInput={(params) => (
                  <TextField {...params} placeholder="add material" />
                )}
              />
            </div>
            <div className="mt-4">
              <Formik
                initialValues={initVals}
                validationSchema={Yup.object().shape(schema)}
                onSubmit={handleSubmit}
                validateOnBlur={true}
              >
                {({ values, setFieldValue }) => {
                  // console.log(values);
                  return (
                    <Form>
                      <Grid container spacing={2}>
                        {matsChoosed.map((mat, i) => {
                          if (values[mat.id] === undefined)
                            setFieldValue(mat.id, "");
                          return (
                            <Grid item md={6} sm={6} xs={12} key={mat.id}>
                              <Field
                                name={mat.id}
                                component={InputField}
                                label={mat.name}
                                leftLabel={mat.uom}
                              />
                            </Grid>
                          );
                        })}
                      </Grid>
                      <div className="flex space-x-3">
                        <Button
                          variant={"gradient"}
                          color={"blue"}
                          className="mt-4 flex items-center py-1 px-6 capitalize"
                          type="button"
                          onClick={() => nav("/dashboard/drinks")}
                        >
                          <Typography
                            color="inherit"
                            className=" font-medium capitalize"
                          >
                            Cancle
                          </Typography>
                        </Button>
                        {matsChoosed.length >= 1 && (
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
                        )}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  );
}

export default DrinksRecipesTopping;
