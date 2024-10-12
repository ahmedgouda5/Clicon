import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../product/Product";
import Loading from "../../components/Loading/Loading";
import HomeSlider from "../../components/homeslider/HomeSlider";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const options = {
          url: `https://dummyjson.com/products`,
          method: "GET",
        };
        const response = await axios.request(options);
        setData(response.data.products); // Set the products array directly
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    setTimeout(() => {
      getProduct();
    }, 1200);
  }, []);

  return (
    <>
      <HomeSlider />
      <div className="grid grid-cols-12  items-center gap-2 pt-[30px] md:pt-0">
        {data.length > 0 ? (
          data.map((product) => <Product key={product.id} product={product} />)
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Home;
