import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import styles from "./DatePickerField.module.scss";
function convert1(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("/");
}
function convert2(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return dayjs([date.getFullYear(), mnth, day].join("-"));
}

function DatePickerField(props) {
  const { field, form, disabled, options, readOnly, label, inputFormat } =
    props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  // console.log(showError);
  const [valueDate, setValue] = React.useState(convert2(value));
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        {...field} // field có 4 thuộc tính là name , value, onChange,onBlur
        disabled={disabled}
        type="date"
        className={`form-field ${disabled ? "bg-gray-200" : ""}  ${
          showError ? "border-[2px] border-red-500" : ""
        }`}
      />
      {showError && <span className="text-red-500">{errors[name]}</span>}
    </>
  );
}

export default DatePickerField;
