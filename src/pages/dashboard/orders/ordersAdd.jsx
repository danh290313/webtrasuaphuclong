import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid, Input } from "@mui/material";
import { FastField, Field, Form, Formik, FieldArray } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { useNavigate } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Label } from "@mui/icons-material";
import useOrder from '@/hooks/useOrder';
import useStaff from '@/hooks/useStaff';
import useBranch from '@/hooks/useBranch';
import {useEffect, useState} from 'react';
import { BranchSchema } from "@/utils/schemas";

const listStaff = [
  { id: "1", value: "Male" },
  { id: "2", value: "Female" },
];

const listShipping = [
  { id: "1", value: "Delivery" },
  { id: "2", value: "Delived" },
  { id: "3", value: "Not delivery" },
];
const listAddress = [
  { id: "1", value: "Giam doc" },
  { id: "2", value: "Quan Ly" },
  { id: "3", value: "Nhan Vien phuc vu" },
];
const listBranch = [
  { id: "1", value: "Vung tau" },
  { id: "2", value: "Ho chi minh" },
  { id: "3", value: "Nha Trang" },
];

const initialValues = 
  {
    staff_id: "",
    branch_id: 1,
    note: "",
    paid: 1,
    order_detail:[
        {
            drink_detail_id: "",
            quantity: 0,
            price : "",
            topping_list: [
                // {
                //     quan: 0,
                //     topping:[
                //          {
                //           topping_id: "",
                //          },
                       
                //     ]
                // }
                
            ]
        }
    ]
};


const validationShema = Yup.object().shape({
  note: Yup.string().min(10, "Name must be at least 10 characters"),
  status: Yup.string().required("This field is required"),
  paid: Yup.string().required("This field is required"),
  created_at: Yup.string().required("This field is required"),

});
function OrdersAdd() {
  const [staffs, setStaffs] = useState();
  const [ branches, setBranches] = useState();
  const {addOrder} = useOrder();
  const {getStaffs} = useStaff();
  const {getBranches} = useBranch();
  
  const handleSubmit = (value) => {
    console.log('value :>> ', value);
    addOrder(value);
  };

  useEffect(() => { 
    (async () => 
    {
      const res = await getStaffs();
      setStaffs(res?.data);
    })();

    (async () => 
    {
      const res = await getBranches();
      setBranches(res?.data);
    })();


   },[]);



  return (
    branches &&
    staffs &&
      (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnBlur={true}
        >
          {({ values }) => {
            //do somthing here
            // console.log(props);
            return (
              <>
                <Form>
                  <div className="mb-5">
                    <Card>
                      <CardBody>
                        <Grid container spacing={2}>

                        
                          <Grid item xs={12} md={6}>
                            <FormGroup>
                              <Field
                                name="staff_id"
                                component={SelectField}
                                value="value"
                                label="Staff"
                                options={staffs.map((v) => ({ id: v.id,
                                value: v.name, }))}
                                defaultOp="Choose Staff"
                              />
                            </FormGroup>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <FormGroup>
                              <Field
                                name="branch_id"
                                component={SelectField}
                                value="value"
                                label="Branch"
                                options={branches.map(
                                  (v) => ({ id: v.id,
                                  value: v.name, })
                                )}
                                defaultOp="Choose branch"
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
                              <Field
                                name="paid"
                                component={SwitchField}
                                label="Paied"
                                confirm={"The buyer has paid bill ?"}
                              />
                            </FormGroup>
                          </Grid>

{/*                           
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
                          </Grid> */}

                          
                         
{/* 


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
                           */}

                        </Grid>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="gap-4 md:flex ">
                    <div className="flex-2 space-y-4 ">
                      <Card className="bg-green-50">
                        <CardBody>
                          <Typography varient="h2" className="font-bold">
                            Detail order
                          </Typography>
                          <Typography>

                  <FieldArray name="order_detail">
                    {arrayHelpers => (
                      <div>
                        {values.order_detail.map((item, index) => (
                          <div key={index}>

                            <Grid container spacing={2}>
                              <Grid item xs={12} md={3}>
                                <FormGroup>
                                  <FastField
                                    name={`order_detail.${index}.drink_detail_id`}
                                    component={InputField}
                                    label="drink_detail_id"
                                  />
                                </FormGroup>
                              </Grid>
                              <Grid item xs={12} md={3}>
                                <FormGroup>
                                  <Field
                                    name={`order_detail.${index}.quantity`}
                                    component={InputField}
                                    label="Quantity:"
                                  />
                                </FormGroup>
                              </Grid>
                              <Grid item xs={12} md={3}>
                                <FormGroup>
                                  <Field
                                    name={`order_detail.${index}.price`}
                                    component={InputField}
                                    label="Price:"
                                  />
                                </FormGroup>
                              </Grid>

                              <Grid item xs={12} md={3}>
                                <FormGroup>
                                <Button className="mt-8 mb-1" type="button" onClick={() => arrayHelpers.remove(index)}>
                                Remove
                                </Button>
                              
                                </FormGroup>
                              </Grid>
                              
                            </Grid>

                          
                          </div>
                        ))}
                          <Button className="mt-1 mb-1" type="button" onClick={() => arrayHelpers.push({ drink_detail_id: '', quantity: 0, price: 0, topping_list:[] })}>
                                  Add 
                          </Button>
                      
                      </div>
                    )}
                  </FieldArray>
                      
                         
                         
                          </Typography>

                        </CardBody>
                      </Card>

                    </div>
                    {/* <div className="mt-4 flex-1 space-y-4 md:mt-0">
                      <Card className="bg-green-50">
                        <CardBody>
                          <Typography varient="h2" className="font-bold">
                            List Topping
                          </Typography>
                          <Typography>

                          </Typography>

                        </CardBody>
                      </Card>

                    </div> */}
                  </div>



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
      </div>


    )
  );
}

export default OrdersAdd;
