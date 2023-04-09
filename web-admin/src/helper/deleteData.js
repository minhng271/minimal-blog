import { deleteItem, getAllData } from "../services";

const deleteData = async (e, API, setValue) => {
  try {
    await deleteItem(API, e.target.closest("tr").id);
    const getNewData = await getAllData(API);
    setValue(getNewData);
  } catch (err) {
    alert("Delete Fail");
  }
};

export default deleteData;
