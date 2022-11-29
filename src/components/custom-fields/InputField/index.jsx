import PropTypes from "prop-types";
import React from "react";
import styles from "./InputField.module.scss";
InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled, autoFocus } = props;
  const { name } = field;
  const { errors, touched } = form;

  const showError = touched[name] && errors[name]; // có message lỗi và touched=true thì trả ra true
  // console.log('form: ', form);
  // console.log('field: ', field);
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        {...field} // field có 4 thuộc tính là name , value, onChange,onBlur
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`form-field ${disabled ? "bg-gray-200" : ""}  ${
          showError
            ? "border-[2px] border-red-500 focus:border-red-500 focus:outline-none"
            : ""
        }`}
        autoFocus={autoFocus}
      />

      {showError && <span className="text-red-500">{errors[name]}</span>}
    </>
  );
}

export default InputField;
