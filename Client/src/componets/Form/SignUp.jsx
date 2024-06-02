/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import FormikController from "./FormikController";
import { useDispatch } from "react-redux";
import { closeCloseButton } from "../../store/closeBtnSlice";
import * as Yup from "yup";
import "../../style/form.css";
import logo from "/logo.png";
import img1 from "/form/form1.png";
import img2 from "/form/form2.png";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../store/api";

const SignUp = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const nevigate =useNavigate()
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeCloseButton());
    nevigate("/")
  };

  const handleSubmitBtn = async (values) =>{
    try {
      await registerUser(values);
      setRegistrationSuccess(true);
      console.log(values,"user---------------------------------------------")
      nevigate("/login")
    } catch (error) {
      console.error("Registration failed:", error);
    }

  }

  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .max(25, "First name must be at most 25 characters")
      .required("Please enter your first name"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .max(25, "Last name must be at most 25 characters")
      .required("Please enter your last name"),
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
        <div className="SignUp-form">
          <div className="form-header">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="my-2">Sign Up</h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmitBtn}
          >
            <Form>
              <FormikController
                control="input"
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
              <FormikController
                control="input"
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              />
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
                <p>already register? </p>
                <Link to="/Login" className="text-blue-700" onClick={handleClose}>
                  Login
                </Link>
              </div>
              <button className="form-btn my-3" type="submit" >
                Sign Up
              </button>
            </Form>
          </Formik>
          {registrationSuccess && <p className="text-center">Registration successful!</p>}
        </div>
      </div>
      <div className="close" onClick={handleClose}>
        <span className="material-symbols-outlined">close</span>
      </div>
      <img src={imgs[currentIndex]} alt="Changing Photo" />
    </div>
  );
};

export default SignUp;
