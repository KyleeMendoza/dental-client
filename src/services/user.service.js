import axios from "axios";

const baseUrl = "http://localhost:9000/user";

const userInfo = async (email) => {
  const params = { email };

  try {
    const response = await axios.get(`${baseUrl}/profile`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching user information.");
  }
};

export default {
  userInfo,
};
