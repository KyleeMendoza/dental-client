import axios from "axios";

const baseUrl = "http://localhost:9000";

const userAppointment = async (name) => {
  const params = { name };

  try {
    const response = await axios.get(`${baseUrl}/fetch/appointment`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching user appointments.");
  }
};

const book = async (appointmentData) => {
  const body = {
    name: appointmentData.name,
    phone: appointmentData.phone,
    date: appointmentData.date,
    start_time: appointmentData.start_time,
    service_name: appointmentData.service_name,
    additional_service: appointmentData.additional_service,
    tooth_name: "",
    client_note: appointmentData.client_note,
  };

  try {
    const response = await axios.post(`${baseUrl}/book/appointment`, body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while booking an appointment.");
  }
};

const availableTime = async (date) => {
  // return date;
  const params = {
    date,
  };
  try {
    const response = await axios.get(`${baseUrl}/available/time`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching available time slots.");
  }
};

export default {
  userAppointment,
  book,
  availableTime,
};
