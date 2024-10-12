/* eslint-disable no-constant-condition */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoryContext } from "../../context/Clicon.context";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { setRefcate ,uniqueProducts ,icon,seticon} = useContext(CategoryContext);
  const [cate, setCate] = useState();


  const Navigate = useNavigate();
  function Logout() {
    localStorage.clear();
    seticon(false)
    Navigate("/auth/login");
  }

  useEffect(() => {
    async function getCateList() {
      try {
        const options = {
          url: "https://dummyjson.com/products/category-list",
          method: "GET",
        };
        const response = await axios.request(options);
        setCate(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    setTimeout(() => {
      getCateList();
    }, 1200);
  }, []);
  const handleChange = (event) => {
    const selectedPro = event.target.value;
    setRefcate(() => selectedPro);

    setSelectedCategory(selectedPro);
    if (selectedPro) {
      Navigate(`/cate/${selectedPro}`);
    }
  };
  return (
    <nav className="py-2 bg-primary text-white p-3  mb-auto z-50 ">
      <div>
        <div className=" flex-col justify-center  md:flex-row flex md:justify-between  md:pb-0 items-center md:container ">
          <h3>Welcome to Clicon online eCommerce store.</h3>
          <div className="flex gap-3 pt-3 md:pt-0">
            <span>follow us :</span>
            <ul className="flex gap-5 ">
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-github"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i>
              </li>
            </ul>
            <span onClick={() => Logout()}>
              <i className="fa-solid fa-right-from-bracket"></i>{" "}
            </span>
          </div>
        </div>
        <div className="md:border-t-2 mt-4 ">
          <div className="md:container flex justify-between w-screen  flex-col gap-3 md:flex-row md:gap-0 items-center py-3 ">
            <div
              onClick={() => {
                Navigate("/");
              }}
              className="flex items-center gap-2 cursor-pointer "
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Clicon
              </span>
            </div>
            <form className="bg-white max-w-screen-sm md:w-1/2 rounded-sm">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative   ">
                <input
                  type="search"
                  id="default-search"
                  className="block  p-3 ps-10 rounded text-black outline-none"
                  placeholder="Search for anything"
                  required=""
                />
                <button
                  type="search"
                  className=" absolute end-2.5 bottom-2.5   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-black dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            {icon ? (
              <div>
                <ul className="flex  justify-between gap-4 text-2xl">
                  <li className="relative">
                    <Link to={"/cart"}>
                   
                      <i className=" relative fa-solid fa-cart-shopping"></i>
                      <span className="absolute bottom-5 font-mono text-lg text-white ">{uniqueProducts.length}</span>
                    </Link>
                  </li>
                  <li>
                    <i className="fa-regular fa-heart"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-user-large"></i>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul className="flex  justify-between gap-4 text-2xl">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <form className="max-w-xs mx-auto">
          <select
            size={0}
            id="categories"
            value={selectedCategory}
            onChange={handleChange}
            className=" h-10 bg-slate-200 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Choose a product
            </option>
            {cate &&
              cate.slice(0, 15).map((pro, index) => (
                <option key={index} value={pro}>
                  {pro}
                </option>
              ))}
          </select>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
