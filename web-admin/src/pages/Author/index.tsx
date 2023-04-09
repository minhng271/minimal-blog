import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { AUTHOR_API } from "../../constants/api";
import { getAllData, createItem, updateItem } from "../../services";
import getData from "../../helper/getData";
import addFormChange from "../../helper/formChange";
import deleteData from "../../helper/deleteData";
import FormAdd from "../../components/FormAdd";
import FormEdit from "../../components/FormEdit";
import formChange from "../../helper/formChange";

const fieldInit = ["Name", "Position", "Avatar"];

const Author = () => {
  const [data, setData] = useState([] as any);
  const [editContentId, setEditContentId] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    Position: "",
    Avatar: "",
  });

  useEffect(() => {
    getData(AUTHOR_API, setData);
  }, []);

  const handleAddFormChange = (e) => {
    addFormChange(e, formData, setFormData);
  };

  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      Name: formData.Name,
      Position: formData.Position,
      Avatar: formData.Avatar,
    };

    try {
      await createItem(AUTHOR_API, newData);
      const getNewData = await getAllData(AUTHOR_API);
      setData(getNewData);
    } catch (err) {
      alert("Add Fail");
    }

    e.target.reset();
  };

  const handleEdit = (item) => {
    setEditContentId(item.Id);

    const formValues = {
      Name: item.Name,
      Position: item.Position,
      Avatar: item.Avatar,
    };

    setFormData(formValues);
  };

  const handleEditFormChange = (e) => {
    formChange(e, formData, setFormData);
  };

  const handleUpdate = async () => {
    const editedData = {
      Id: editContentId,
      Name: formData.Name,
      Position: formData.Position,
      Avatar: formData.Avatar,
    };

    const newData = [...data];
    const index = data.findIndex((item) => item.Id === editContentId);
    newData[index] = editedData;

    try {
      await updateItem(AUTHOR_API, editContentId, editedData);
      const getNewData = await getAllData(AUTHOR_API);

      setData(getNewData);
    } catch {
      alert("Update fail");
    }
    setEditContentId(null);
  };

  const handleDelete = async (e) => {
    deleteData(e, AUTHOR_API, setData);
  };

  return (
    <DefaultLayout>
      <FormAdd
        fieldInit={fieldInit}
        handleAddFormSubmit={handleAddFormSubmit}
        handleAddFormChange={handleAddFormChange}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Avatar</th>
            <th>Feature</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>
            editContentId === item.Id ? (
              <FormEdit
                key={item.Id}
                item={item}
                fieldInit={fieldInit}
                handleEditFormChange={handleEditFormChange}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            ) : (
              <tr id={item.Id}>
                <td className="id">{item.Id}</td>
                <td className="name">{item.Name}</td>
                <td className="position">{item.Position}</td>
                <td className="avatar">
                  <img src={item.Avatar} alt="" />
                </td>
                <td>
                  <button className="btn edit" onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button className="btn delete" onClick={handleDelete}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </DefaultLayout>
  );
};

export default Author;
