/* eslint-disable react/prop-types */
import InputElement from "./InputElement";

function FormikController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputElement {...rest} />;
    default:
      return null;
  }
}

export default FormikController;
