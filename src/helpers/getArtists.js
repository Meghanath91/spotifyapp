import axios from "axios";

const callApi = async (searchQuery, accessToken) => {
  const searchUrl = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
    searchQuery
  )}&type=artist`;

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