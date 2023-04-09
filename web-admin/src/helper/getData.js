import { getAllData } from "../services";

const getData = async (API, methodSet) => {
  try {
    const dataServer = await getAllData(API);

    methodSet(dataServer);
  } catch {
    methodSet([]);
  }
};

export default getData;
