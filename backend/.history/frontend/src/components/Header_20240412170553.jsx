import React from "react";
import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();
  return <div>Header</div>;
};

export default Header;
