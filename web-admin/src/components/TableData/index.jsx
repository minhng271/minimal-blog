import React from "react";
import "./index.css";

const TableData = (props) => {
  const { item, fieldInit, handleEdit, handleDelete } = props;

  return (
    <tr id={item.Id}>
      <td className="id">{item.Id}</td>
      {fieldInit &&
        fieldInit.map((field) =>
          field === "Category" ? (
            <td key={field} className={field}>
              {item[field] &&
                item[field].map((item) => (
                  <p key={item} className="category-name">
                    {item}
                  </p>
                ))}
            </td>
          ) : (
            <td key={field} className={field}>
              {item[field]}
            </td>
          )
        )}
      <td>
        <button className="btn edit" onClick={() => handleEdit(item)}>
          Edit
        </button>
        <button className="btn delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableData;
