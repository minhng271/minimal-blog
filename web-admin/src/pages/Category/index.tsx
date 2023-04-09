import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { CATEGORY_API } from "../../constants/api";
import { getAllData, createItem, updateItem } from "../../services";
import getData from "../../helper/getData";
import formChange from "../../helper/formChange";
import deleteData from "../../helper/deleteData";
import FormAdd from "../../components/FormAdd";
import FormEdit from "../../components/FormEdit";
import TableData from "../../components/TableData";

const fieldInit = ["Name", "NumberOfPost"];

const Category = () => {
  const [data, setData] = useState([] as any);
  const [editContentId, setEditContentId] = useState(null);

  const [formData, setFormData] = useState({
    Name: "",
  });

  useEffect(() => {
    getData(CATEGORY_API, setData);
  }, []);

  const handleAddFormChange = (e) => {
    formChange(e, formData, setFormData);
  };

  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      Name: formData.Name,
    };

    try {
      await createItem(CATEGORY_API, newData);
      const getNewData = await getAllData(CATEGORY_API);
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
    };

    const newData = [...data];
    const index = data.findIndex((item) => item.Id === editContentId);
    newData[index] = editedData;

    try {
      await updateItem(CATEGORY_API, editContentId, editedData);
      const getNewData = await getAllData(CATEGORY_API);

      setData(getNewData);
    } catch {
      alert("Update fail");
    }
    setEditContentId(null);
  };

  const handleDelete = async (e) => {
    deleteData(e, CATEGORY_API, setData);
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
            <th>Number of post</th>
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
              <TableData
                key={item.Id}
                item={item}
                fieldInit={fieldInit}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )
          )}
        </tbody>
      </table>
    </DefaultLayout>
  );
};

export default Category;
