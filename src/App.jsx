import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Protect from "./pages/protectRoute/Protect";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Product from "./pages/product/Product";
import ProductD from "./pages/productdetals/ProductD";
import Cate from "./pages/category/Cate";
import CategoryProvider from "./context/Clicon.context";
import Cart from "./pages/cart/Cart";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Protect>
              <Home />
            </Protect>
          ),
        },
        {
          path: "home",
          element: (
            <Protect>
              <Home />
            </Protect>
          ),
        },
        { path: "/product", element: <Product /> },
        { path: "/product/:id", element: <ProductD /> },
        { path: "/cate/:id", element: <Cate /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
    {
      path: "/auth",
      element: <Layout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]);

  return (
    <>
      <CategoryProvider>
        <RouterProvider router={routes}></RouterProvider>;
      </CategoryProvider>
    </>
  );
};

export default App;
