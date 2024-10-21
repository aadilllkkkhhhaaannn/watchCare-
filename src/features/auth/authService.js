import axios from "axios";

// const API_URL = "https://register/user/api/user/";
const register = async (formData) => {
  const response = await axios.post("/api/user", formData);
  // const response = await axios.post(API_URL + "register", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const verification = async (formData) => {
  const response = await axios.post("/api/user", formData);
  // const response = await axios.post(API_URL + "register", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

// const response = await axios.post(API_URL + "login", formData);
const login = async (formData) => {
  const response = await axios.post("/api/user/login", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const authService = {
  register,
  login,
  verification,
};

export default authService;
