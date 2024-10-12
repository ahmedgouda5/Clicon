import React, { createContext, useState } from "react";

export const CategoryContext = createContext(null);

export default function CategoryProvider({ children }) {
  const [refcate, setRefcate] = useState(null);
  const [icon, seticon] = useState(true);
  const [Token ,setToken]=useState(localStorage.getItem('ahmed'))
  const [cart,setCart]=useState([])
  const [products,setProducts]=useState()
  const [allproduct,setAll]=useState(JSON.parse(localStorage.getItem('product'))||[])


  const uniqueProducts = allproduct.filter((product, index, self) => 
   index === self.findIndex((p) => p.id === product.id)
  );
console.log(uniqueProducts.length);

  return (
    <CategoryContext.Provider value={{ refcate, setRefcate ,icon ,seticon,cart,setCart,setProducts,setAll,uniqueProducts}}>
      {children}
    </CategoryContext.Provider>
  );
}
