import axios from "axios";

const callApi = async (searchUrl, accessToken) => {
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios.get(searchUrl, headers)
};
export default callApi