import React, { useContext, useState } from "react";

import apple from "../../assets/images/Apple.png";
import { CategoryContext } from "../../context/Clicon.context";

const Cart = () => {
  const { uniqueProducts } = useContext(CategoryContext);
  const [product,setProduct] = useState(uniqueProducts);
  console.log(product);
  const Delete=(i)=>{
    const updatedProducts = [...product]; // نسخ المصفوفة لتجنب التعديل المباشر
    updatedProducts.splice(i, 1); // حذف العنصر في الفهرس i
    setProduct(updatedProducts); 
     
  }
  

  return (
    <div className="bg-primary h-screen p-5">
      <div className=" px-5 py-7">
        <div className="mb-2 bg-slate-100 px-5 py-3 font-bold">
          <ul className="flex justify-between">
            <li>product</li>
            <li>price</li>
            <li>delete</li>
          </ul>
        </div>

        {product
          ? product.map((pro,index) => (
              // eslint-disable-next-line react/jsx-key
              <div className="bg-slate-100 px-5 py-5 mb-3  ">
                <ul className="flex justify-between items-center">
                  <li>
                    <img src={pro.thumbnail} className="w-24 object-fill aspect-square" alt="" />
                  </li>
                  <li>
                    <span className="font-semibold ps-8">{pro.price}$</span>
                  </li>
                  <li>
                    <button onClick={()=>Delete(index)} className="font-semibold bg-primary text-white px-2 rounded hover:text-orange-400">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Cart;
