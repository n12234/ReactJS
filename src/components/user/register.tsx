import axios from "axios";
import { RegisterValidate } from "../../validator/user";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../interface/user";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";


const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },

    validationSchema: Yup.object({
      email: Yup.string()
      .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, 
      'Vui lòng nhập địa chỉ email')
      .required('Email is required'),
      password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 
        'Mật khẩu phải có 8 ký tự và một chữ cái viết hoa, viết thường, một ký tự đặc biệt hoặc dấu cách'),
      confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Mật khẩu phải phù hợp').nullable()
    }),

    onSubmit: async (values, {setSubmitting, resetForm}) => {
      try {
        const response = await axios.post(`http://localhost:8000/register`, values);
        toast.success("Đăng kí thành công!");
        navigate("/login");
        resetForm()
      } catch (error) {
        toast.error("Kiểm tra lại email hoặc mật khẩu!");
      } finally {
        setSubmitting(false)
      }
    },
  })
  // const [account, setAccount] = useState<userRegister>({
  //   email: "",
  //   password: "",
  // });
  // const [message, setMessage] = useState<string>("");

  // const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAccount({ ...account, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   const { error } = RegisterValidate.validate(account);

  //   if (error) {
  //     setMessage(error.message);
  //   } else {
  //     try {
  //       const response = await axios.post(`http://localhost:8000/register`, account);
  //       alert("Đăng kí thành công!");
  //       navigate("/login");
  //     } catch (error) {
  //       setMessage("Đăng kí thất bại!");
  //     }
  //   }
  // };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {formik.errors.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                    type="text"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {formik.errors.password && (
                    <p className="text-red-500">{formik.errors.password}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="ConfirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {formik.errors.confirmPassword && (
                    <p className="text-red-500">{formik.errors.confirmPassword}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> 
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <Link to={"/login"}>Sign in</Link>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
