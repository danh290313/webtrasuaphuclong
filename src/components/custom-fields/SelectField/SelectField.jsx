import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./SelectMuiField.module.scss";
import { Autocomplete, styled, TextField } from "@mui/material";
SelectMuiField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

SelectMuiField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};
function SelectMuiField(props) {
  const {
    field,
    form,
    label,
    disabled,
    options,
    readOnly,
    id,
    value,
    defaultOp,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name]; // có message lỗi và touched=true thì trả ra true
  const handleChangeAutoComplete = (e, newvalue) => {
    form.setFieldValue(name, newvalue ? newvalue[id] : "");
  };
  const handleBlurTextField = (e) => {
    form.setTouched({ ...form.touched, [name]: true });
    const findingOption = options.find(
      (option) => option[value] === e.target.value
    );
    const idOption = findingOption
      ? findingOption[id]
      : field.value === ""
      ? ""
      : field.value;
    form.setFieldValue(name, idOption);
  };
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        {...field} // field có 4 thuộc tính là name , value, onChange,onBlur
        disabled={disabled}
        className={`form-field ${disabled ? "bg-gray-200" : ""}  ${
          showError ? "border-[2px] border-red-500 focus:outline-none" : ""
        }`}
      >
        <option value="">--{defaultOp}--</option>
        <option value="1">Nam </option>
        <option value="2">Nữ</option>
      </select>
      {showError && <span className="text-red-500">{errors[name]}</span>}
      {/* <ErrorMessage
        name={name}
        render={(msg) => <span className={cx("error")}>{msg}</span>}
      /> */}
    </>
  );
}

export default SelectMuiField;
