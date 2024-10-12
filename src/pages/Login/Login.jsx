import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import google from "../../assets/images/Google.png";
import Apple from "../../assets/images/Apple.png";
import { CategoryContext } from "../../context/Clicon.context";
import { useContext } from "react";

const Login = () => {
  const {seticon}=useContext(CategoryContext)
  const Navigte = useNavigate();

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character"
      ),
  });

  async function handleSubmit(values) {
    if (values) {
      localStorage.setItem("ahmed", "ahmed");
      Navigte("/Home");
      seticon(true)
    } else {
      return false;
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
      <div className="login flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 ">
        <div className="form  w-full md:w-1/3 p-4 shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center border-b-2  flex-col">
            <div className="flex justify-between gap-9 pb-2">
              <NavLink
                to={"/auth/login"}
                className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900"
              >
                Sign in
              </NavLink>
              <NavLink
                to={"/auth/signup"}
                className="mt-10 text-center text-2xl  font-semibold leading-9 tracking-tight text-gray-900"
              >
                Sign up
              </NavLink>
            </div>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  username
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
                    autoComplete="username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <img src={google} />
                <span className="text-lg flex-1">Login with Google</span>
              </div>
              <div className="text-center border-2 rounded py-3 flex justify-start px-2">
                <img src={Apple} />
                <span className="text-lg flex-1">Login with Apple</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
