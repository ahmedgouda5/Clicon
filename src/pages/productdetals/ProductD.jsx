import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ReactImageGallery from "react-image-gallery";

const ProductD = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        const options = {
          url: `https://dummyjson.com/products/${id}`,
          method: "GET",
        };
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    getProduct();
  }, []);

  const image = data?.images?.length
    ? data.images.map((imageURl) => ({
        original: imageURl,
        thumbnail: imageURl,
      }))
    : [];

  return (
    <>
      {data ? (
        <div className="grid grid-cols-12 gap-5  ">
          <div className="col-span-12 md:col-span-4">
            <ReactImageGallery
              items={image}
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h1 className="text-2xl font-bold pb-3">{data.description}</h1>
            <div className="flex justify-between">
              <span>
                <span className="text-lg font-bold">Sku:</span>
                {data.sku}
              </span>
              <span>
                <span className="text-lg font-bold">Availbilty:</span>
                {data.stock}
              </span>
            </div>
            <div className="flex justify-between">
              <span>
                <span className="text-lg font-bold">brand:</span>
                {data.brand}
              </span>
              <span>
                <span className="text-lg font-bold">Category:</span>
                {data.category}
              </span>
            </div>
            <p className="text-xl text-green-600 font-semibold mt-2">
              ${data.price}
            </p>
            <div className="py-8 flex justify-evenly gap-4 ">
              <button className="text-2xl font-semibold flex-1 rounded hover:bg-orange-300 bg-orange-500 w-1/6 px-4 py-2 text-white">
                Add to Cart
              </button>
              <button className="text-2xl font-semibold rounded border border-orange-500 px-4 py-2 hover:text-white hover:bg-orange-400 text-orange-500">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductD;
