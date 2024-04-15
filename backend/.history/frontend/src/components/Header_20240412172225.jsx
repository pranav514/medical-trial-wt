import React from "react";
import Loader from "./Loader";
import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import SmallProduct from "../pages/Products/SmallProduct";
const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h1>ERROR</h1>;
  }
  console.log(data);
  return (
    <div className="flex justify-around">
      <div className="xl:block lg:hidden md:hidden sm:hidded">
        <div className="grid grid-cols-2">
          {data.map((product) => (
            <div key={product._id}>
              <SmallProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
