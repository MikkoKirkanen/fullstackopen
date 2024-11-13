import axios from "axios";

const dbUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

export const getAll = () => {
  return axios.get(dbUrl + 'all').then(response => response.data);
};