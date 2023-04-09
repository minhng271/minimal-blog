const formSubmit = async (event, formField, formData) => {
  event.preventDefault();
  const newData = {
    DepartmentName: addFormData.DepartmentName,
  };

  try {
    await createItem(DEPARTMENT_API, newData);
    const getNewData = await getAllData(DEPARTMENT_API);
    setData(getNewData);
  } catch (err) {
    alert("Add Fail");
  }

  e.target.reset();
};

export default formSubmit;
