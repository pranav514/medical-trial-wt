import React from "react";

const CategoryForm = ({
  value,
  setValue,
  handleSubmit,
  buttonText = "Submit",
  handleDelete,
}) => {
  return <div  className="p-3"><form onSubmit={handleSubmit} className="space-y-3">
  <input
    type="text"
    className="py-3 px-4 border rounded-lg w-full"
    placeholder="Write category name"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  /></div>;
};

export default CategoryForm;
