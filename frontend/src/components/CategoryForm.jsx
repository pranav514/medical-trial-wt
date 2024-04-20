import React from "react";

const CategoryForm = ({
  value,
  setValue,
  handleSubmit,
  buttonText = "Submit",
  handleDelete,
}) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Ensure credentials are included in the fetch request
    await handleSubmit({ newCategory: value }, { fetchOptions: { credentials: 'include' } });
  };

  const handleDeleteClick = async () => {
    // Ensure credentials are included in the fetch request
    await handleDelete({ fetchOptions: { credentials: 'include' } });
  };

  return (
    <div className="p-3">
      <form onSubmit={handleFormSubmit} className="space-y-3">
        <input
          type="text"
          className="py-3 px-4 border rounded-lg w-full"
          placeholder="Write category name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-between">
          <button className="bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50">
            {buttonText}
          </button>

          {handleDelete && (
            <button
              onClick={handleDeleteClick}
              className="bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 foucs:ring-cyan-500 focus:ring-opacity-50"
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
