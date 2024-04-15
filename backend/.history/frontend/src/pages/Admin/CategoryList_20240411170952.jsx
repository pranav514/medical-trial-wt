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
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatingName, setUpdatingName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  return (
    <div className="ml-[10rem] flex flex-col md:flex-row">
      {/* <AdminMenu /> */}
      <div className="md:w-3/4 p-3">
        <div className="h-12">Manage Categories</div>
      </div>
    </div>
  );
}

export default CategoryList;
