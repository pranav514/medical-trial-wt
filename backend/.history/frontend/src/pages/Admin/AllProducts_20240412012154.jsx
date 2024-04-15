import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import AdminMenu from "./AdminMenu";
import { useAllProductsQuery } from "../../redux/api/productApiSlice";

const AllProducts = () => {
  const { data: products, isLoading, isError } = useAllProductsQuery();
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Eroor Loading Product</div>;
  }

  return (
    <div className="container mx-[9rem]">
      <div className="flex flex-col md:flex-row">
        <div className="p-3">
          <div className="ml-[2rem] text-xl font-bold h-12">
            All Products ({products.length})
          </div>

          <div className="flex flex-wrap justify-around items-center">
            {products.map((product) => (
              <Link
                key={product._id}
                to={`admin/product/update/${product._id}`}
                className="block mb-4 overflow-hidden"
              >
                <div className="flex">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[10rem] object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
