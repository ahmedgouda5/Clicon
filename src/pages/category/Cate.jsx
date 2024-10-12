import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { CategoryContext } from "../../context/Clicon.context";

const Cate = () => {
  const [data, setData] = useState([]);
  const { refcate } = useContext(CategoryContext);

 

  useEffect(() => {
    async function getCate() {
      const options = {
        url: `https://dummyjson.com/products/category/${refcate}`,
        method: "GET",
      };
      const response = await axios.request(options);
      setData(response.data.products);
      // console.log(response.data.products);
      
    }
    getCate();
  }, [refcate]);

  return (
    <>
      {data ? (
        <div className="grid grid-cols-12  items-center justify-center  gap-2 pt-[30px] md:pt-0">
          {data.map((pro) => (
            <div
              key={pro.id}
              className=" col-span-12 w-full  md:col-span-3 lg:col-span-4 rounded-md overflow-hidden shadow-lg"
            >
              <div className="relative">
                <div className="overlay  opacity-0 hover:opacity-100 transition-opacity duration-300   gap-3 absolute bg-opacity-20 bg-slate-500 left-0 top-0 right-0 bottom-0 flex justify-center items-center ">
                  <Link
                    to={"/wishlist"}
                    className=" font-bold  hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </Link>
                  <div className=" font-bold hover:rotate-6 hover:scale-110 transition:transform duration-300  w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <Link
                    to={(`/product/${pro.id}`)} 
                    className=" font-bold  hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
                <img
                  className=" aspect-square object-contain"
                  src={pro.thumbnail}
                />
              </div>
              <div className="p-4   ">
                <h3 className="text-primary">{pro.title}</h3>
                <h2 className="font-semibold line-clamp-2">
                  rating :{pro.rating}
                </h2>
                <div className="flex justify-between items-center py-3">
                  <span>{pro.price} EGP</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Cate;
