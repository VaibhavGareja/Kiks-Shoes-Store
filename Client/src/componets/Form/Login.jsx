/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { closeCloseButton } from "../../store/closeBtnSlice";
import * as Yup from "yup";
import "../../style/form.css";
import logo from "/logo.png";
import img1 from "/form/form1.png";
import img2 from "/form/form2.png";
import { Link, useNavigate } from "react-router-dom";
import FormikController from "./FormikController";
import { loginUser } from "../../store/api";
import { setUser } from "../../store/userSlice";

const Login = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();


  const handleClose = () => {
    dispatch(closeCloseButton());
    nevigate("/");
  };

  const handleSubmitBtn =async (values) =>{
    try {
      const { token, user } = await loginUser(values);
      dispatch(setUser({ token, user }));
      localStorage.setItem("token", token)
      handleClose();
    } catch (error) {
      console.log("login error", error)
    }
  }
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email address"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Please enter your password"),
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const imgs = [img1, img2];
  const intervalTime = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main_container">
      <div className="form-container">
        <div className="Login-form">
          <div className="form-header">
            <img src={logo} alt="logo" />
          </div>
          <h1>Login</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmitBtn}
          >
            <Form>
              <FormikController
                control="input"
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              <FormikController
                control="input"
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <div className="form-footer">
                <p>Not registered yet? </p>
                <Link to="/signup" className="text-blue-700">Register</Link>
              </div>
              <button className="form-btn my-3" type="submit">
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="close" onClick={handleClose}>
        <span className="material-symbols-outlined">close</span>
      </div>
      <img src={imgs[currentIndex]} alt="Changing Photo" />
    </div>
  );
};

export default Login;
