import axios from "axios";

const baseUrl = "https://13.211.204.176/user";

const login = async (email, password) => {
  const body = {
    email,
    password,
  };
  try {
    const response = await axios.post(`${baseUrl}/login`, body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while logging in.");
  }
};

const register = async (email, phone, name, address, password) => {
  const body = {
    email,
    phone,
    name,
    address,
    password,
  };
  try {
    const response = await axios.post(`${baseUrl}/register`, body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while registering.");
  }
};

export default {
  login,
  register,
};
