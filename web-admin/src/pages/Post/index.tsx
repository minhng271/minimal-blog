import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { CATEGORY_API, POST_API, AUTHOR_API } from "../../constants/api";
import { getAllData, createItem, updateItem, deleteItem } from "../../services";
import formChange from "../../helper/formChange";
import TableData from "../../components/TableData";
import moment from "moment";

const fieldInit = [
  "AuthorId",
  "CreateAt",
  "Title",
  "Banner",
  "Content",
  "Category",
];

const setDataPost = (dataPost) => {
  const allData: any[] = [];
  dataPost.map((item) => {
    const categories: string[] = [];
    item.Post_Categories.map((element) => {
      categories.push(element.Category.Name);
    });

    const newData = {
      Id: item.Id,
      AuthorId: item.Author.Name,
      CreateAt: moment(item.CreateAt).format("DD/MM/YYYY"),
      Title: item.Title,
      Banner: item.Banner,
      Content: item.Content,
      Category: categories,
    };
    allData.push(newData);
  });

  return allData;
};

const Post = () => {
  const [data, setData] = useState([] as any);
  const [editContentId, setEditContentId] = useState(null);
  const [categories, setCategories] = useState([] as any);
  const [authors, setAuthors] = useState([] as any);
  const [formData, setFormData] = useState({
    AuthorId: "",
    CreateAt: "",
    Title: "",
    Banner: "",
    Content: "",
    Category: "",
  });

  useEffect(() => {
    const getData = async () => {
      const dataPost = await getAllData(POST_API);
      const dataCategory = await getAllData(CATEGORY_API);
      const dataAuthor = await getAllData(AUTHOR_API);
      setData(setDataPost(dataPost));
      setCategories(dataCategory);
      setAuthors(dataAuthor);
    };

    getData();
  }, []);

  const handleAddFormChange = (e) => {
    formChange(e, formData, setFormData);
  };

  const handleAddFormSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      AuthorId: formData.AuthorId,
      Title: formData.Title,
      Banner: formData.Banner,
      Content: formData.Content,
      Post_Categories: [{ CategoryId: formData.Category }],
    };

    try {
      await createItem(POST_API, newData);
      const getNewData = await getAllData(POST_API);
      setData(setDataPost(getNewData));
    } catch (err) {
      alert("Add Fail");
    }

    e.target.reset();
  };

  const handleEdit = (item) => {
    setEditContentId(item.Id);

    const formValues = {
      AuthorId: item.AuthorId,
      CreateAt: item.CreateAt,
      Title: item.Title,
      Banner: item.Banner,
      Content: item.Content,
      Category: item.Category,
    };

    setFormData(formValues);
  };

  const handleEditFormChange = (e) => {
    formChange(e, formData, setFormData);
  };

  const handleUpdate = async () => {
    const editedData = {
      Id: editContentId,
      AuthorId: formData.AuthorId,
      Title: formData.Title,
      Banner: formData.Banner,
      Content: formData.Content,
      Post_Categories: [{ CategoryId: formData.Category }],
    };

    const newData = [...data];
    const index = data.findIndex((item) => item.Id === editContentId);
    newData[index] = editedData;

    try {
      await updateItem(POST_API, editContentId, editedData);
      const getNewData = await getAllData(POST_API);

      setData(getNewData);
    } catch {
      alert("Update fail");
    }

    setEditContentId(null);
  };

  const handleDelete = async (e) => {
    try {
      await deleteItem(POST_API, e.target.closest("tr").id);
      const getNewData = await getAllData(POST_API);
      setData(setDataPost(getNewData));
    } catch (err) {
      alert("Delete Fail");
    }
  };

  return (
    <DefaultLayout>
      <div className="add-data">
        <h2 className="title">Add data</h2>
        <form onSubmit={handleAddFormSubmit}>
          <select
            onChange={handleAddFormChange}
            className="select-group"
            name="AuthorId"
            defaultValue="default"
          >
            <option value="default" disabled>
              Author
            </option>
            {authors &&
              authors.map((option) => (
                <option key={option.Id} id={option.Id} value={option.Id}>
                  {option.Name}
                </option>
              ))}
          </select>
          <input
            type="text"
            name="Title"
            placeholder="Enter title"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="Banner"
            placeholder="Enter banner"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="Content"
            placeholder="Enter content"
            onChange={handleAddFormChange}
          />
          <select
            onChange={handleAddFormChange}
            className="select-group"
            name="Category"
            defaultValue="default"
          >
            <option value="default" disabled>
              Category
            </option>
            {categories &&
              categories.map((option) => (
                <option key={option.Id} id={option.Id} value={option.Id}>
                  {option.Name}
                </option>
              ))}
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>AuthorName</th>
            <th>CreateAt</th>
            <th>Title</th>
            <th>Banner</th>
            <th>Content</th>
            <th>Category</th>
            <th>Feature</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>
            editContentId === item.Id ? (
              <tr key={item.Id} id={item.Id}>
                <td className="id">{item.Id}</td>
                <td className="author-name">
                  <select
                    onChange={handleAddFormChange}
                    className="select-group"
                    name="AuthorId"
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Author
                    </option>
                    {authors &&
                      authors.map((option) => (
                        <option
                          key={option.Id}
                          id={option.Id}
                          value={option.Id}
                        >
                          {option.Name}
                        </option>
                      ))}
                  </select>
                </td>
                <td>
                  <input type="text" name="Title" defaultValue={item.Title} />
                </td>
                <td>
                  <input type="text" name="Banner" defaultValue={item.Banner} />
                </td>
                <td>
                  <input
                    type="date"
                    name="CreateAt"
                    defaultValue={item.CreateAt}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Content"
                    defaultValue={item.Content}
                  />
                </td>
                <td>
                  <select
                    onChange={handleAddFormChange}
                    className="select-group"
                    name="Category"
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Category
                    </option>
                    {categories &&
                      categories.map((option) => (
                        <option
                          key={option.Id}
                          id={option.Id}
                          value={option.Id}
                        >
                          {option.Name}
                        </option>
                      ))}
                  </select>
                </td>
                <td>
                  <button className="btn update" onClick={handleUpdate}>
                    Update
                  </button>
                  <button className="btn delete" onClick={handleDelete}>
                    Delete
                  </button>
                </td>
              </tr>
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

export default Post;
