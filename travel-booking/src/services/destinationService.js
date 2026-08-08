import api from "./api";


export const getAllDestinations = async () => {
  const response = await api.get("/destinations");
  return response.data;
};