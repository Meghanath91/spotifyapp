import axios from "axios";

const callApi = async (id, accessToken) => {
  const url = `https://api.spotify.com/v1/artists/${id}/albums`;

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios.get(url, headers)
};
export default callApi