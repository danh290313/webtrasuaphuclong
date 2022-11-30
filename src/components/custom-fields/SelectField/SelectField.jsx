import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./SelectMuiField.module.scss";
import { Autocomplete, styled, TextField } from "@mui/material";
SelectField.propTypes = {
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

SelectField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};
function SelectField(props) {
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
  const findOp = options.find((v) => v.id === field.value);

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
        {options
          ? options.map((option, i) => (
              <option value={option.id} selected={!!findOp} key={i}>
                {option.value}
              </option>
            ))
          : null}
      </select>
      {showError && <span className="text-red-500">{errors[name]}</span>}
    </>
  );
}

export default SelectField;
