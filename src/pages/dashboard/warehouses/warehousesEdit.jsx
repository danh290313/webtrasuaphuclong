import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid, Input } from "@mui/material";
import { FastField, Field, Form, Formik, FieldArray } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link, useParams } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import { warehousesSchema } from "@/utils/schemas";
import { useState } from "react";
import { useEffect } from "react";
import useWarehouse from "@/hooks/useWarehouse";

import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { Pagination } from "@mui/material";

const initialValues = {
  name: "",
  address: "",
  phone_number: "0961144072",
  date_opened: "2000/11/11",
  materialsOfWarehouse: [
    {
      id: "1",
      name: "danh",
      uom: "kg",
      amount:"",
    },
  ],
  active: 1,
  
};

export function WarehousesEdit() {
  const [warehouse, setWarehouse] = useState();
  const { getWarehouse } = useWarehouse();
  const { id } = useParams();

  // const handleSubmit = (value) => {
  //   const reContructVal = {
  //     //name: value.name,
  //     address: value.address,
  //     phone_number: value.phone_number,
  //     date_opened: value.date_opened,
  //     materialsOfWarehouse: value.materialsOfWarehouse.map(
  //                           (mat) => ({
  //                             id: mat.id,
  //                             amount: mat.amount,
  //                             name: mat.name,
  //                           }),
  //                         ),
  //     active: value.active,
  //   }
  // }
    

  // };
  // initContructVal(warehouse);



  useEffect(() => {
    (async () => {
      const res = await getWarehouse(id);
      setWarehouse(res?.warehouseInfo);
    })();
  }, []);

  console.log(warehouse, "danh");

  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const { editWarehouse, getAllWarehouses, deleteWarehouse } = useWarehouse();

  const handleChangePage = (e, npage) => {
    setPage(npage);
  };



  const handleSubmit = (value) => {

    const reContructVal = {
      name: value.name,
      address: value.address,
      phone_number: value.phone_number,
      date_opened: value.date_opened,
      list_material: value.materialsOfWarehouse.map(
                            (mat) => ({
                              id: mat.id,
                              amount: mat.amount,
                            }),
                          ),
      active: value.active,
    }
    editWarehouse(id, reContructVal);


    console.log("tsssssss", value);
  };
  console.log(warehouse, "danh");

  return (
    warehouse && (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Formik
          initialValues={warehouse}
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
                              />
                            </FormGroup>
                          </Grid>
                        </Grid>
                      </CardBody>
                    </Card>
                  </div>

                  {/* 
          <FieldArray name="materialsOfBranch">
            {({ insert, remove, push }) => (
              <div>
                {
                  values.materialsOfBranch.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`materialsOfBranch.${index}.name`}>Name</label>
                        <Field
                          name={`materialsOfBranch.${index}.name`}
                          placeholder="Jane Doe"
                          type="text"
                        />
                    
                      </div>

                      <div className="col">
                        <label htmlFor={`materialsOfBranch.${index}.email`}>Email</label>
                        <Field
                          name={`materialsOfBranch.${index}.email`}
                          placeholder="jane@acme.com"
                          type="email"
                        />
                        
                      </div>
                     
                    </div>
                  ))}
               
              </div>
            )}
          </FieldArray> */}

                  <FieldArray
                    name="materialsOfWarehouse"
                    render={(arrayHelpers) => (
                      <div>
                        {
                          <table className="w-full min-w-[640px] table-auto">
                            <thead className="bg-green-500 ">
                              <tr>
                                {["id", "name", "uom", "amount"].map((el) => (
                                  <th
                                    key={el}
                                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                  >
                                    <Typography
                                      variant="small"
                                      className="text-[15px] font-bold uppercase text-blue-gray-400 text-white"
                                    >
                                      {el}
                                    </Typography>
                                  </th>
                                ))}
                              </tr>
                            </thead>

                            <tbody>
                              {values.materialsOfWarehouse.map(
                                ({id, name},index) => {
                                  const className = `py-3 px-5 ${
                                    index ===
                                    warehouse?.materialsOfWarehouse?.length - 1
                                      ? ""
                                      : "border-b border-blue-gray-50 "
                                  }`;

                                  return (
                                    <tr key={index}>
                                      {/* <input className={className}
    name="idMaterial"
    value={idMaterial}
    component={InputField}
    
  /> */}

                              <td className={className}> 
                                <Field
                              name={`materialsOfWarehouse.${index}.id`}
                              placeholder="Jane Doe"
                              type="text"
                              disabled
                              />
                               </td>

                           

                              <td className={className}>
                              <Field
                              name={`materialsOfWarehouse.${index}.name`}
                              placeholder="Jane Doe"
                              type="text"
                              disabled
                              />
                               </td>

                             
                      <td className={className}>
                        <Field
                              name={`materialsOfWarehouse.${index}.amount`}
                              placeholder="Jane Doe"
                              type="text"
                              className="text-blue-900 underline decoration-dotted text-xl"
                              />
                      </td>

                      <td className={className}>
                      <Field
                              name={`materialsOfWarehouse.${index}.uom`}
                              placeholder="Jane Doe"
                              type="text"
                              disabled
                              />
                      </td>

                            

                              

                                      
                                    </tr>
                                  );
                                }
                              )}
                            </tbody>
                          </table>
                        }
                      
                      </div>
                    )}
                  />

        

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

export default WarehousesEdit;
