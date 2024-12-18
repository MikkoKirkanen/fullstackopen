import axios from "axios";

const dbUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(dbUrl).then(response => response.data);
};

const create = (newObject) => {
  return axios.post(dbUrl, newObject).then(response => response.data);
};

const remove = (id) => {
  return axios.delete(`${dbUrl}/${id}`).then(response => response.data);
};

const update = (updateObject) => {
  return axios.put(`${dbUrl}/${updateObject.id}`, updateObject).then(response => response.data);
};

export default {
  getAll: getAll,
  create: create,
  remove: remove,
  update: update,
};
