import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useFetchCategoriesQuery,
} from "../../redux/api/categoryApiSlice";

function CategoryList() {
  const { data: categories } = useFetchCategoriesQuery();
  console.log(categories);

  return <div>CategoryList</div>;
}

export default CategoryList;
