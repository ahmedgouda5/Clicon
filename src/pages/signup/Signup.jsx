import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import google from "../../assets/images/Google.png";
import Apple from "../../assets/images/Apple.png";
import { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character"
      ),
  });

  async function handleSubmit(values) {
    let id;
    try {
      id = toast.loading("Logging in...");
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
          expiresInMins: 30,
        }),
        credentials: "include",
      });
      
      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log(data);

      toast.dismiss(id);
      toast.success("Login successful");
      navigate("/dashboard"); // Redirect to a protected route

    } catch (error) {
      toast.dismiss(id);
      toast.error("Login failed");
      setErrorMsg(error.message);
      console.error("Error:", error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="register flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="form w-1/3 p-4 shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center border-b-2 flex-col">
            <div className="flex justify-between gap-9 pb-2">
              <NavLink
                to={"/auth/login"}
                className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900"
              >
                Sign in
              </NavLink>
              <NavLink
                to={"/auth/signup"}
                className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900"
              >
                Sign up
              </NavLink>
            </div>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="name"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="current-password"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="text-sm text-right py-1">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>

              <div className="text-center border-2 rounded py-3 flex justify-start px-2">
                <img src={google} alt="Google" />
                <span className="text-lg flex-1">Login with Google</span>
              </div>
              <div className="text-center border-2 rounded py-3 flex justify-start px-2">
                <img src={Apple} alt="Apple" />
                <span className="text-lg flex-1">Login with Apple</span>
              </div>
            </form>
            {errorMsg && <div className="text-red-500 text-sm mt-4">{errorMsg}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
