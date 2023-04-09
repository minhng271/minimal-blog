import React from "react";

const FormEdit = (props) => {
  const { item, fieldInit, handleEditFormChange, handleUpdate, handleDelete } =
    props;
  return (
    <tr key={item.Id} id={item.Id}>
      <td className="id">{item.Id}</td>
      {fieldInit &&
        fieldInit.map((field) => (
          <td key={field} className={item}>
            <input
              className="edit-content"
              type="text"
              defaultValue={item[field]}
              name={field}
              onChange={handleEditFormChange}
            />
          </td>
        ))}
      <td>
        <button className="btn update" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default FormEdit;
