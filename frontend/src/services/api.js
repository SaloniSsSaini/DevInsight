import axios from "axios";

const BASE_URL = "https://devinsight-ab9t.onrender.com/api";
export const fetchData = async (developerId) => {
  const res = await axios.get(`${BASE_URL}/metrics/${developerId}`);
  return res.data;
};

export const fetchManager = async (managerId) => {
  const res = await axios.get(`${BASE_URL}/manager/${managerId}`);
  return res.data;
};