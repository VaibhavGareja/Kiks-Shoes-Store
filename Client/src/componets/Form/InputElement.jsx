/* eslint-disable react/prop-types */
import { Field, ErrorMessage } from "formik";

const InputElement = ({ label, name, type, placeholder }) => {
  return (
    <div className="input-field">
      <label className="my-1" htmlFor={name}>{label}:</label>
      <Field className="px-3"  type={type} name={name} placeholder={placeholder} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default InputElement;
