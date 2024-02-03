import axios from "axios";

const baseUrl = "http://localhost:9000/list";

const serviceList = async () => {
  try {
    const response = await axios.get(`${baseUrl}/services`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching service lists.");
  }
};

export default {
  serviceList,
};
