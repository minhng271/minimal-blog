import axios from 'axios';

export const getAllData = async (API) => {
  const res = await axios.get(API);
  return res.data;
};

export const createItem = async (API, data) => {
  return axios.post(API, data);
};

export const updateItem = async (API, id, data) => {
  return axios.put(`${API}/${id}`, data);
};

export const deleteItem = async (API, id) => {
  return axios.delete(`${API}/${id}`);
};


