const formChange = (e, formData, setValue) => {
    e.preventDefault();
    
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;

    setValue(newFormData);
}

export default formChange;
