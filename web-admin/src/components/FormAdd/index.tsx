import React from "react";
import "./index.css";

const FormAdd = (props) => {
  const { fieldInit, handleAddFormSubmit, handleAddFormChange, categories } =
    props;
  return (
    <div className="add-data">
      <h2 className="title">Add data</h2>
      <form onSubmit={handleAddFormSubmit}>
        {fieldInit &&
          fieldInit.map((field) =>
            field === "Category" ? (
              <select
                key={field}
                onChange={handleAddFormChange}
                className="select-group"
                name="Category"
              >
                {categories &&
                  categories.map((option) => (
                    <option key={option.Id} id={option.Id} value={option.Name}>
                      {option.Name}
                    </option>
                  ))}
              </select>
            ) : (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={`Enter a ${field}`}
                onChange={handleAddFormChange}
              />
            )
          )}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormAdd;
