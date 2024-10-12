import { Link, useNavigate } from "react-router-dom";
import { CategoryContext } from "../../context/Clicon.context";
import { useContext } from "react";

export default function Product({ product }) {
  const navigate = useNavigate();
  const { images, description, price, rating, id } = product;
  const { cart, setCart, setProducts ,setAll } = useContext(CategoryContext);

  const AddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    cart.push(product)
    setProducts(localStorage.setItem("product", JSON.stringify(cart)));
    setAll(cart)
  };

  return (
    <div
      key={id}
      className="col-span-6 w-full md:col-span-3 lg:col-span-2 rounded-md overflow-hidden shadow-lg"
    >
      <div className="relative">
        <div className="overlay opacity-0 hover:opacity-100 transition-opacity duration-300 gap-3 absolute bg-opacity-20 bg-slate-500 left-0 top-0 right-0 bottom-0 flex justify-center items-center">
          <Link
            to={"/wishlist"}
            className="font-bold hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary flex justify-center items-center text-white rounded-full"
          >
            <i className="fa-solid fa-heart"></i>
          </Link>
          <div
            onClick={() =>AddToCart(product)}
            className="font-bold hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary flex justify-center items-center text-white rounded-full"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <Link
            to={`/product/${id}`}
            className="font-bold hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary flex justify-center items-center text-white rounded-full"
          >
            <i className="fa-solid fa-eye"></i>
          </Link>
        </div>
        <img
          className="aspect-square object-contain"
          src={images[0]}
          alt={description}
        />
      </div>
      <div className="p-4">
        <h3 className="text-primary">{description.slice(0, 15)}</h3>
        <h2 className="font-semibold line-clamp-2">{rating}</h2>
        <div className="flex justify-between items-center py-3">
          <span>{price} EGP</span>
        </div>
      </div>
    </div>
  );
}
